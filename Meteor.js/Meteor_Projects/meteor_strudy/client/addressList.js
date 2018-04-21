Template.addressList.helpers({
  // helper 템플릿 매니저는 데이터를 제공하는 기능을 갖는다.
  list() {
    return AddressBook.find({}, { limit: 10, sort: { birthday: 1 } }); // 몽고DB에서 데이터베이스를 검색하여 나온 결과를 반환한다. (10개만 출력 / 생년월일이 먼저인 순으로)
  }
});

Template.addressList.events({
  // event 템플릿 매니저는 어떤 이벤트가 발생했을때 어떤 기능을 하게끔 도와준다.
});

Template.addressInput.events({
  "click button[name=saveAddress]"(evt, tmpl) {
    // name의 어트리뷰트 값이 saveAddress인 버튼을 클릭하면 다음 구문이 실행된다.

    /* input 박스 값으로 입력 데이터 만들기 */
    let address = {
      //  입력된 값을 담을 변수
      name: tmpl.find("input[name=name]").value,
      phone: tmpl.find("input[name=phone]").value,
      email: tmpl.find("input[name=email]").value,
      company: tmpl.find("input[name=company]").value,
      birthday: tmpl.find("input[name=birthday]").value
    };

    /* insert 하기 */
    AddressBook.insert(address); // 미티어 컬렉션(몽고 DB)에 insert 메소드를 이용하여 저장한다.

    /* input 값 초기화하기 */
    tmpl.find("input[name=name]").value = "";
    tmpl.find("input[name=phone]").value = "";
    tmpl.find("input[name=email]").value = "";
    tmpl.find("input[name=company]").value = "";
    tmpl.find("input[name=birthday]").value = "";
  }
});

Template.addressListItem.events({
  "click button[name=remove]"(evt, tmpl) {
    // name의 어트리뷰트 값이 remove인 버튼을 클릭하면 다음 구문이 실행된다.
    AddressBook.remove({ _id: this._id });
    // 미티어 컬렉션에 제거(몽고 DB에서 제거) / 버튼이 눌린 해당 열의 아이디의 줄을 삭제한다.
  },
  "click button[name=modify]"(evt, tmpl) {
    Session.set("editItem", this._id);
  },
  "click button[name=save]"(evt, tmpl) {
    let address = {
      //  입력된 값을 담을 변수
      name: tmpl.find("input[name=name]").value,
      phone: tmpl.find("input[name=phone]").value,
      email: tmpl.find("input[name=email]").value,
      company: tmpl.find("input[name=company]").value,
      birthday: tmpl.find("input[name=birthday]").value
    };
    AddressBook.update({ _id: this._id }, { $set: address });
    Session.set("editItem", null);
  },
  "click button[name=cancel]"(evt, tmpl) {
    Session.set("editItem", null);
  },
  "click .edit-thing"(evt, tmpl) {
    Session.set("editItem", this._id);
  }
});

Template.addressListItem.helpers({
  editing() {
    return this._id == Session.get("editItem");
  }
});
