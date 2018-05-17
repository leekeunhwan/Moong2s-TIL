# Node.js Query_String

http://a.com/topic?id=1

topic 이라는 path 뒤에 [?id=1]이라는 부분이 Query String 입니다.
[?id=1]이라고 적으면 topic 에서 1 이라는 숫자에 해당되는 결과를 처리해서 화면에 처리해줍니다.

## Semantic URL

좀 더 의미론 적으로 부합되는 URL 체계를 만들면 사용하는 사용자에게 좀 더 좋은 사용자 경험을 줄 수 있습니다.<br/>
위와 같은 URL 체계를 Semantic URL 이라고 하며,<br/>
다음과 같이 Non-Semantic URL 과 Semantic URL 을 비교해 보았을 때<br/>
Semantic URL 은 Query String 없이 URL 을 사용하는 것을 볼 수 있습니다.<br/>
<br/>

[Ex)] Non-Semantic URL

> http://example.com/index.php?page=name

[Ex)] Semantic URL

> http://example.com/name

