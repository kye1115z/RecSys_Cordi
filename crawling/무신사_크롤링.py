#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jul  9 01:08:54 2022

@author: juyeon
"""
import requests
from bs4 import BeautifulSoup
import numpy as np
import re
from selenium import webdriver
import pandas as pd
import warnings
import random

###############################

# 페이지
pages = np.arange(1, 11)

# 카테고리 번호
# 반소매 티셔츠 : 001001

num = "001001"


def clothes_num(num, pages):
    url_head = """https://www.musinsa.com/category/{num}?d_cat_cd={num}&brand=&rate=&page_kind=search&list_kind=small
    &sort=sale_high&sub_sort=1y&page={page}&display_cnt=90&sale_goods=&group_sale=&kids=N&ex_soldout=&color=&price1=&price2=&
    exclusive_yn=&shoeSizeOption=&tags=&campaign_id=&timesale_yn=&q=&includeKeywords=&measure="""
    clothes_num = []

    for page in pages:
        url = url_head.format(num=num, page=page)
        r = requests.get(url)
        content = r.content
        soup = BeautifulSoup(content, "html.parser")
        items = soup.select("div > ul > li.li_box")
        for item in items:
            clothes_num.append(item["data-no"])

    return clothes_num


# 다 리스트 안에 저장 선형적으로 저장
num_li = clothes_num(num, pages)

num_li
###############################

def coordi_processing(data):
    
    coordi_series = pd.Series(data)
    coordi_list = ["아메리칸 캐주얼", "캐주얼", "시크", "댄디", "포멀", "걸리시", "골프", "홈웨어", "레트로", "로맨틱", "스포츠", "스트릿"]
    coordi_TF = coordi_series.isin(coordi_list)

    a = []
    for i in np.arange(len(coordi_TF)):
        if coordi_TF[i] == True:
            a.append(data[i])
            
    if len(a) == 0:
        a = ""
    else:
        a = list(set(a))
        
    return a

def season_processing(data, season_find):

    if data == "시즌":
        season = re.sub(" +|\n", " ", season_find).strip()
    else:
        season = ""

    return season

################################


def crawling(num_li):
    # 크롬 드라이버 객체 생성
    driver = webdriver.Chrome("/Users/yoohajun/Library/Mobile Documents/com~apple~CloudDocs/Hajun/프로젝트/Cordi_RecSys/crawling/chromedriver")

    driver.implicitly_wait(3)

    # 상품을 담을 리스트
    clothes_li = []

    # beautifulsoup의 select 태그는 조건에 맞는 여러 개를 가져옴
    for num in num_li:

        # 상품 코드 바꿔가면서 페이지 순회 => 상품 조회
        url = f'https://www.musinsa.com/app/goods/{num}'

        try :
            driver.get(url)

            # 1초에서 2초 사이 랜덤하게 휴식
            driver.implicitly_wait(random.randint(1, 2))

            # 바뀐 url 정보를 parsing해서 soup변수에 저장
            soup = BeautifulSoup(driver.page_source, 'html.parser')

            # 상품 이름
            name = soup.select("div > div > span > em")[0].text
            # 대분류
            main_category = soup.select("div > div > p.item_categories > a")[0].text
            # 중분류
            sub_category = soup.select("div > div > p.item_categories > a")[1].text
            # 브랜드
            brand = soup.select("div > ul > li > p > strong > a")[0].text
            # 품번
            number = soup.select_one("div > ul > li > p > strong").text.split(" / ")[1]
            # 해시태그
            tags = [re.sub('[#]', '', s.text) for s in soup.select("li > p > a.listItem")]
            # 가격
            price = re.sub(" +|\n", "", soup.select("#goods_price")[0].text)
            # 평점
            rating = soup.select("span.prd-score__rating")[0].text
            # 후기 개수
            rating_num = soup.select("span.prd-score__review-count")[0].text
            rating_num = re.sub(r'[^0-9]', '', rating_num)
            # 시즌
            season_word = soup.select("a.ui-toggle-btn")[0].text.split(" ")[0]
            season_find = soup.select("li > p.product_article_contents > strong")[1].text
            season = season_processing(season_word, season_find)

            # 성별
            gender = [g.text for g in soup.select("li > p.product_article_contents > span.txt_gender > span")]

            # 좋아요 개수
            like = soup.select("li > p > span.prd_like_cnt")[0].text
            # 조회수
            view = soup.select("#pageview_1m")[0].text
            # 누적판매
            sale = soup.select("#sales_1y_qty")[0].text
            # 코디 정보
            coordi = [s.text for s in soup.select("p.style_txt")]
            coordi = coordi_processing(coordi)

            # ~ 18세
            age18 = soup.select("span.bar_num")[0].text
            # 19 ~ 23세
            age19_23 = soup.select("span.bar_num")[1].text
            # 24 ~ 28세
            age24_28 = soup.select("span.bar_num")[2].text
            # 29 ~ 33세
            age29_33 = soup.select("span.bar_num")[3].text
            # 34 ~ 39세
            age34_39 = soup.select("span.bar_num")[4].text
            # 40 ~
            age40 = soup.select("span.bar_num")[5].text
            # 남성 구매 비율
            man = soup.select("dd.label_info_value")[0].text
            # 여성 구매 비율
            woman = soup.select("dd.label_info_value")[1].text
            # 상품 사진
            img = 'https:' + soup.select("#detail_bigimg > div.product-img > img")[0]['src']

            # 옷 아이템 객체
            clothes = [name, main_category, sub_category, brand, number, tags, price, rating, rating_num, season, gender,
                       like, view, sale, coordi, age18, age19_23, age24_28, age29_33, age34_39, age40, man, woman, img]

            # 옷 리스트에 아이템 객체 추가
            clothes_li.append(clothes)

            print(f'{num}, : {clothes} |\n{"*" * 20}')

        except :
            pass

    driver.quit()
    
    df = pd.DataFrame(clothes_li,
                      columns=["name", "main_category", "sub_category", "brand", "number", "tags","price", "rating", "rating_num", "season", "gender",
                               "like", "view", "sale", "coordi", "age18","age19_23", "age24_28", "age29_33", "age34_39", "age40", "man", "woman", "img"])
        
    return df

# 크롤링 실행해서 저장
clothes = crawling(num_li)

# csv 저장
clothes.to_csv('short_sleeve_t-shirt.csv', index=True)

