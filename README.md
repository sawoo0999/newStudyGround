flexbox




기본값

flex-grow : 0;

1.각 item 들 부모 width 기준으로 크기 설정
2. 1로 변경시 빈공간없이 똑같은 크기로 변경


기본값

flex-shrink: 1;

1. 부모의 width 최대값을 item들이 넘을수 없으면
2. 0으로 설정하면 부모의 width를 무시하고 넘어서 크기를  키울수 있음

기본값

flex-basis : auto;

1. item 크기 설정
2. px 설정해주면 그 값으로 변함
3. flex-shrink: 1 이면 적정한 값으로 변경됨

통합 지정

flex: 0(flex-grow) 0(flex-shrink) 200px(flex-basis)

