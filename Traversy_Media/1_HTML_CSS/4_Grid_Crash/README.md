# 🎡 Grid

`Flexbox`가 1차원 레이아웃을 생성한다면, `Grid`는 2차원 레이아웃을 생성함.

## 🎪 사용
1. 컨테이너에 아래 코드 추가
```CSS
.container {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(10px, auto);
}
```
> `gird-auto-rows`는 그리드의 높이를 설정함. 위 값은 최소 10px의 높이를 보장하고, 최대 컨텐츠 크기만큼 높이를 확보할 수 있음.

## 🎒 정렬
1. `justify-content` : 컨테이너의 자식요소들의 프레임 내에서 좌우정렬
2. `align-items` : 컨테이너의 자식요소들의 프레임 내에서 상하정렬
3. `justify-self` : 특정 박스의 프레임 내에서 좌우정렬
4. `align-self` : 특정 박스의 프레임 내에서 상하정렬

## ⚾ 레이아웃 만들기
```CSS
.box-1 {
    grid-column: 1/3;
    grid-row: 2/4;
}
```
> 가로가 1~3번선까지 차지하고, 세로가 2~4번선까지 차지하는 그리드 생성

> grid-column은 차지하는 column의 개수이므로 너비가 됩니다.