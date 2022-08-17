for (let i = 0; i < document.getElementsByClassName("test-upload").length; i++) {
  document.getElementsByClassName("test-upload")[i].addEventListener("change", function (e) {
    console.log(e.target.files[0].name);

    document.getElementsByClassName("test-preview")[
      i
    ].innerHTML = ` <p id='upload-success-msg' class='one-liner'>${e.target.files[0].name}</p> &nbsp; <b style="color: #0f5288">file uploaded successfully</b>`;
  });
}
