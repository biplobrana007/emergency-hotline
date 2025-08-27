/*reuseable function for DOM*/
function getElement(id) {
  return document.getElementById(id);
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}
//------------------------------------------------------------------------

document.querySelector(".cards").addEventListener("click", (e) => {
  const btn = e.target;

  /*heart functionality*/
  let heartCount = parseInt(getInnerText("heart-count"));
  if (btn.className.includes("heart")) {
    getElement("heart-count").innerText = heartCount + 1;
    btn.classList.remove("heart");
    console.log(btn.classList);
  }

  /*call button functionality*/

  const serviceTitle =
    btn.parentNode.parentNode.children[1].children[0].innerText;
  const serviceNumber =
    btn.parentNode.parentNode.children[2].children[0].innerText;

  let coinCount = parseInt(getInnerText("coin-count"));

  const callHistoryContainer = getElement("call-history-conatiner");
  const callHistory = document.createElement("div");
  callHistory.innerHTML = `
            <div class="call-history bg-[#fafafa] p-4 rounded-lg flex items-center justify-between">
                <div class="">
                    <h2 id="service-title" class="text-lg font-semibold text-black">${serviceTitle}</h2>
                    <h3 id="service-number" class="text-lg font-normal text-gray-500">${serviceNumber}</h3>
                </div>
                <h2 id="callig-time" class="text-lg font-normal text-black">${new Date().toLocaleTimeString()}</h2>
            </div>
    `;
  if (btn.className.includes("calling-service-number")) {
    if (coinCount >= 20) {
      alert(`📞 Calling ${serviceTitle} ${serviceNumber}....`);
      getElement("coin-count").innerHTML = coinCount - 20;
      callHistoryContainer.append(callHistory);
    } else {
      alert(
        `❌ Insufficient coin❗ Please try, when you have at least 20 coins.`
      );
    }
  }

  /*copy button functionality*/
  const copyNumber =
    btn.parentNode.parentNode.children[2].children[0].textContent;
  let copyCount = parseInt(getInnerText("copy-count"));
  if (btn.className.includes("copy-service-number")) {
    getElement("copy-count").innerText = copyCount + 1;
    return navigator.clipboard.writeText(copyNumber);
  }
});

/*clear button functionality*/
getElement("clear-btn").addEventListener("click", () => {
  const callHistoryContainer = getElement("call-history-conatiner");
  callHistoryContainer.innerHTML = "";
});
