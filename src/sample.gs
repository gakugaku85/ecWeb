function doGet(e){
  let data = e.parameter.data //urlの日付けをdataにいれる。
  //日付けの行を求める。
  let row = 1
  while(row != 100){
    if(SpreadsheetApp.getActiveSheet().getRange(row, 5).getValue().indexOf(data) != -1){ //日付けがなかったら-1帰ってくる。
      break;
    }
    row++;
  }
  //日付けの行のデータ(スプレッドシート)をrDataに格納する。
  var rData = {
    startTime: SpreadsheetApp.getActiveSheet().getRange(row, 1).getValue(),
    stopTime: SpreadsheetApp.getActiveSheet().getRange(row, 2).getValue(),
    title: SpreadsheetApp.getActiveSheet().getRange(row, 3).getValue(),
    content: SpreadsheetApp.getActiveSheet().getRange(row, 4).getValue()
  };
  //rdataをjsonにしてjsonファイルを返す。
  //参考→[https://qiita.com/tfuruya/items/3c306ee03d1ac290bcef]
  var payload = JSON.stringify(rData, null, 2)
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  return output;
}

function doPost(e){
  const jsonString = e.postData.getDataAsString();　//stringデータが渡されてくるので、jsonStringにいれる。
  const data = JSON.parse(jsonString);　//stringのデータをモデルに変換してdataに入れる。
  //空いてる行を探す。
  var i = 1;
  while(i != 0){
    if(SpreadsheetApp.getActiveSheet().getRange(i, 1).isBlank()){//空白かどうかの判定
      break;
    }
    i++;
  }
  //スプレッドシートに各値の書き込み
  SpreadsheetApp.getActiveSheet().getRange(i, 1).setValue(data.startTime);
  SpreadsheetApp.getActiveSheet().getRange(i, 2).setValue(data.stopTime);
  SpreadsheetApp.getActiveSheet().getRange(i, 3).setValue(data.title);
  SpreadsheetApp.getActiveSheet().getRange(i, 4).setValue(data.content);
  
  var today = new Date();
   SpreadsheetApp.getActiveSheet().getRange(i, 5).setValue((today.getMonth()+1) + "_" + today.getDate());//日付けの取得と書き込み
}
