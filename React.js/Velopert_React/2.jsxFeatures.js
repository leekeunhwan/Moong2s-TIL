/**
 * JSX 특징
 *
 * 1. Nested Element
 *
 * JSX는 중접된 요소라는 특징을 가지고 있는데,
 * 콤포넌트 안에 여러 Element를 렌더링 할 때,
 * 꼭 Container element 안에 포함 시켜야 합니다.
 * 포함하지 않으면 에러 코드가 발생합니다.
 *
 *
 * 밑에 코드는 Container element안에 포함하지 않은 것으로 에러가 발생합니다.
 *
 * render () {
 *  return (
 *    <h1>Hi</h1>
 *    <h2>I am Error kkk</h2>
 *  )
 * }
 *
 * 이번 코드는 Container element안에 포함되어 있기 때문에 에러가 발생하지 않습니다.
 *
 * render () {
 *  return (
 *    <div>
 *      <h1>Hi</h1>
 *      <h2>Error is Gone</h2>
 *    </div>
 *  )
 * }
 *
 *
 * 2. JavaScript Expression
 *
 * JSX 안에서 JavaScript를 표현하는 방법은 간단합니다.
 * {}으로 Wrapping하여 사용합니다.
 *
 *
 * render () {
 *  let text = "Hello World";
 *  return (
 *    <div>{text}</div>
 *  )
 * }
 *
 * ## 여기서 let이란?
 *  - ES6에서 등장한 새로운 문법으로 변수를 선언할 때 사용하는 구문입니다.
 *    let은 전역 또는 함수 유효 범위를 갖는 var와 다르게 변수가 사용된 블록, 구문 또는 표현식에서 유효 범위를 갖습니다.
 *    let을 사용하면 var 사용시에 생기는 문제(ex 호이스팅, 함수 scope..)를 해결할 수 있습니다.
 *    또한, let은 한번 선언하면 다시 선언할 수 없습니다.
 *    ES6에서는 var대신 변수를 사용할 때는 let을 사용하는 것이 관습이므로 let을 사용하도록 합니다.
 *
 *
 * 3. Inline Style
 *
 * JSX 안에서 Style을 설정할 때에는, String 형식을 사용하지 않고,
 * key가 camelCase인 객체가 사용됩니다.
 *
 *
 * render () {
 *  let style = {
 *    color:'aqua',
 *    backgroundColor:'black'
 *  };
 *
 *  return (
 *    <div style={style}>React Style</div>
 *  )
 * }
 *
 * ## JSX 안에서 class를 설정할 때에는 className이라는 어트리뷰트를 사용해야 합니다.
 * render () {
 *  return (
 *    <div className="box">React Class</div>
 *  )
 * }
 *
 *
 * 4. Comment (주석)
 *
 * JSX 안에서 주석을 작성할 때는 { /*...* / } 멀티라인 형식으로 작성해야 합니다. (/*은 붙여줘야합니다. 주석이 풀려서 한칸뛰고 작성한 것이니까 주의!)
 * 또한, container element 안에 주석이 작성되어야 합니다.
 *
 * render () {
 *  return (
 *    <div>
 *     {/* This is how your comment * /}
 *     {/* Multi-line
 *          Testing * /}
 *       React Class2
 *    </div>
 *  )
 * }
 */
