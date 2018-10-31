# Apollo-Client

## 설치하기

---

```
npm install apollo-boost react-apollo graphql --save
```

<br>

## Create a Client

---

```js
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});
```

apollo-boost 에서 ApolloClient 를 가져와서<br>
GraphQL 서버에 대한 엔드포인트를<br>
클라이언트 설정 객체의 uri 속성에 추가합니다.<br>
추가를 완료했다면 데이터를 가져올 준비가 되었습니다.<br>

```js
import gql from "graphql-tag";

// ...(code)

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));
```

ApolloClient 를 React 에 결합하기전에<br>
먼저 일반 javascript 로 쿼리를 보내 봅시다.<br>
동일한 파일에서 client.query()를 호출해보면<br>
콘솔창에서 쿼리한 데이터를 확인할 수 있습니다.<br>

<br>

## Connect your client to React

---

Apollo Client 를 React 에 연결하려면 react-apollo 에서 내보낸<br>
ApolloProvider 구성 요소를 사용해야합니다.<br>
ApolloProvider 는 React 의 Context API 의 Provider 와 유사합니다.<br>
React 응용 프로그램을 랩핑하고 컨텍스트의 클라이언트를 배치하므로<br>
구성 요소 트리의 아무 곳에서나 엑세스 할 수 있습니다.<br>

```js
import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
```

React App 을 ApolloProvider 로 랩핑했습니다.<br>
ApolloProvider 는 GraphQL 데이터를 액세스하는 앱보다 위에<br>
두는 것이 좋습니다. 만약에 react-router 를 사용하고 있다면<br>
당신의 root route component 보다 높은 포지션에 있는게 좋습니다.<br>

<br>

## Request Data

---

ApolloProvider 가 연결되면 쿼리 구성 요소로 데이터를 요청할 준비가 된 것입니다.<br>
Query 는 render prop 패턴을 사용하여 GraphQL 데이터를 UI 와 공유하는<br>
react-apollo 에서 내보낸 React 구성요소입니다.<br>

먼저 gql 함수로 래핑 된 GraphQL 쿼리를 쿼리 구성 요소의 쿼리 prop 으로 전달합니다.<br>
그런 다음 쿼리 구성 요소의 하위 prop 에 렌더링 할 항목을 결정하는 함수를 제공하고<br>
Query 는 로드, 오류 및 데이터 속성이 포함 된 개체로 호출합니다.<br>
Apollo Client 는 오류 및로드 상태를 추적하며 로드 및 오류 속성에 반영됩니다.<br>
쿼리 결과가 돌아 오면 데이터 속성에 연결됩니다.<br>

```js
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);
```

ExchangeRates 구성 요소를 렌더링하면<br>
먼저 로딩 인디케이터(string : Loading...)가 표시되고,<br>
준비가 되면 페이지에 데이터가 표시됩니다.<br>
Apollo Client 는 서버에서 돌아올 때 데이터가 자동으로 캐시하므로,<br>
동일한 쿼리를 두 번 실행하면 로딩 인디케이터가 표시되지 않습니다.<br>

<br>
