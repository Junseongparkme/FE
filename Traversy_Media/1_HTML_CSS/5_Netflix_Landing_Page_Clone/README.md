# 🥏 showcase (header) 부분 만들면서..
1. 클래스 두개인 요소 만들기 : `a.btn.btn-rounded`
2. 기본 폰트사이즈가 16px이라면, 1rem은 16px임. 
3. vh는 뷰포트 높이임. 100vh는 브라우저전체, 101vh는 스크롤 생김
4. 특정 박스의 자식을 움직이기 위해서 부모는 `relative`, 자식은 `absolute` 포지션
5. `background` 속성에서 size는 position 바로 뒤에만 올 수 있고 `/`로 구분함.
```CSS
div {
    background: url('images/background.jpg') no-repeat center center/cover;
}
```
6. `background-size`에 대해
   1. `contain` : 찌그러지지도 않고 잘리지도 않을 정도로 조절
   2. `cover` : 찌그러지지는 않지만 잘리는 정도로 조절
7. `inline-block`은 인라인으로 배치되면서 `block`의 속성을 가지는 요소
8. `border-radius`의 값은 원의 반지름을 의미함.
9. `::after`로 오버레이를 생성해 입힐 수 있음. 이 때 `z-index`를 활용함. 값이 높을수록 우리에게 더 높게보임.
10. `box-shadow`에 대해
```CSS
div {
    box-shadow: inset 200px 300px 300px #fff;
}
```
> `inset` 옵션을 추가하면 그림자가 박스 안쪽으로 진행함.

순서대로 `inset offsetX offsetY blur color`
1. `offsetX`의 값이 커질수록 그림자는 왼쪽에서 오른쪽으로 확장됨
2. `offsetY`의 값이 커질수록 그림자는 위에서 아래로 확장됨
3. `blur`의 값이 커질수록 그림자가 연해짐. (음수를 가질 수 없음)

## 이미지 배치 팁
이미지를 특정 좌표로 배치하면 그 좌표는 이미지의 (0,0)과 일치하게 됩니다.

좌표를 이미지의 중심과 일치시키고 싶다면 아래 코드를 추가합니다.

```CSS
div {
    transform: translate(-50%, -50%);
}
```
1. 인자로 오는 두 x, y의 값을 퍼센트로 받을 수 있습니다.
2. 해당 퍼센트는 이미지 자신의 크기의 퍼센트를 의미합니다.
3. 즉, 너비가 10px, 높이가 4px인 이미지에 `translate(-50%, -50%)`는 이미지를 왼쪽으로 5px만큼, 위로 2px만큼 이동시킵니다.
4. 입력한 좌표와 이미지의 중앙이 서로 일치하게 됩니다.
