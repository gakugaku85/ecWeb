import fetch from "node-fetch";

export class Base {
  static URL() {
    //return "https://script.google.com/macros/s/AKfycbygnn-ZFpdiah0zoCKVG2ah45oFSgWz5VNF5SS_MCuMD8_oPE95/exec";
    return "https://script.google.com/a/g.metro-cit.ac.jp/macros/s/AKfycbwDEi6wbZfRS-bkN1plSasj80dcOwWcLWOG6Sf0AA/exec";
  }
  static findOne(sheet, colName, id) {
    return fetch(
      this.URL() +
        "?gSheetName=" +
        sheet +
        "&gColName=" +
        colName +
        "&getId=" +
        id
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json.flat();
        //返ってきたJsonファイルの各値を、表示するために代入。
      })
      .catch(err => {
        console.log(err);
      });
  }
  static findMany(sheet, colName, id, sort) {
    return fetch(
      this.URL() +
        "?gSheetName=" +
        sheet +
        "&gColName=" +
        colName +
        "&getId=" +
        id
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        return json.sort((pre, cur) => {
          return pre[sort] < cur[sort] ? -1 : pre[sort] > cur[sort] ? 1 : 0;
        });
        //返ってきたJsonファイルの各値を、表示するために代入。
      })
      .catch(err => {
        console.log(err);
      });
  }
}
