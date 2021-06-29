(async function () {
  'use strict';

  await Promise.all(
    [
      "https://churchofjesuschristdev.github.io/send-ministering-assignments/transform.js",
      "https://churchofjesuschristdev.github.io/send-ministering-assignments/template.js",
      "https://churchofjesuschristdev.github.io/send-ministering-assignments/email.js",
    ].map(function (src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src =  src;
        //script.async = false;
        script.onload = resolve;
        script.onload = reject;
        document.body.append(script);
      });
    })
  );

  let data = JSON.parse($('script[type="application/json"]').innerText);
  console.info("Initial Page Load Data:");
  console.info(data);
  console.info();
  
  console.info("Loading missing information (email, address, etc) ...");
  await CJCD.init(data);
  console.info("Done.");
  console.info();
  
  console.info("Ministering Assignments (sensibly organized):");
  console.info(
    JSON.stringify(CJCD.toJSON(), null, 2)
  );
}());
