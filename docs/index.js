document.getElementById("go").addEventListener("click", () => {
    let result;

    try {
        result = window.sjcl.decrypt(document.getElementById("key").value, document.getElementById("json").value)
    }
    catch (err) {
        result = false
    }

    let success = document.getElementById("success")
    success.innerHTML = `Success?: <h3 ${result ? "style=\"color: green;\">Yes!" : "style=\"color: red;\">No..."}</h3>`
    document.body.appendChild(success)

    let res = document.getElementById("result")
    if (result)
        res.innerHTML = `Result: <hr /><textarea readonly>${result}</textarea>`
    else
        res.innerHTML = ""

    res.parentElement.insertBefore(success, res)
})