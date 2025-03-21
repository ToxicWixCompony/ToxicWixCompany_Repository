const profileBtn = document.getElementById("profileBtn")
const shopBtn = document.getElementById("shopBtn")
const aside = document.getElementById("asideid")
const ocBtn = document.getElementById("open-close-aside")
const sections = document.getElementById("section-container")
const sectionShop = document.getElementById("section-shop")
const sectionProfile = document.getElementById("section-profile")
let ShowBoxes = document.querySelectorAll(".show-box")
const ProfileChangeBtn = document.getElementById("ProfileChangeBtn")
const changedPlrofileDetails = document.getElementById("changedPlrofileDetails")
const LoginPage = document.getElementById("LoginPage")
const LP_username_id_input = document.getElementById('LP-username-id-input')
const LPpasswordBtn = document.getElementById('password-button')
const LPpasswordinput = document.getElementById('LPpasswordinput')
const LP_authcode_input = document.getElementById('LP-authcode-input')
const data_error_p = document.getElementById('data-error-p')
const authcode_error_p = document.getElementById('authcode-error-p')

function GoToLoginPage() {
    LoginPage.classList.add("Active")

}
function GetOutLoginPage() {
    LoginPage.classList.remove("Active")
    if (LoginPage.classList.contains('by-authcode')) {
        LoginPage.classList.replace('by-authcode', 'by-data')
    }
    if (LPpasswordinput.getAttribute('type') == "text") {
        LPpasswordinput.setAttribute('type', 'password')
        LPpasswordBtn.textContent = 'دیدن'
        LPpasswordBtn.classList.replace('show', 'hide')
    }
    LP_username_id_input.value = ''
    LPpasswordinput.value = ''
    LP_authcode_input.value = ''
    data_error_p.textContent = ''
    authcode_error_p.textContent = ''
}

function goto_authcode_login() {
    if (LoginPage.classList.contains('by-data')) {
        LoginPage.classList.replace('by-data', 'by-authcode')
    }
}

function goto_data_login() {
    if (LoginPage.classList.contains('by-authcode')) {
        LoginPage.classList.replace('by-authcode', 'by-data')
    }
}

function showpassonoginpage() {
    if (LPpasswordinput.getAttribute('type') == "password") {
        LPpasswordinput.setAttribute('type', 'text')
        LPpasswordBtn.textContent = 'مخفی'
        LPpasswordBtn.classList.replace('hide', 'show')
    }
    else if (LPpasswordinput.getAttribute('type') == "text") {
        LPpasswordinput.setAttribute('type', 'password')
        LPpasswordBtn.textContent = 'دیدن'
        LPpasswordBtn.classList.replace('show', 'hide')
    }
}

function login_by_user_data() {
    data_error_p.textContent = 'این بخش بزودی فعال میشود'
}

function login_by_user_authcode() {
    authcode_error_p.textContent = 'این بخش بزودی فعال میشود'
}

const href_tocreat_account = document.getElementById('href-tocreat-account')

href_tocreat_account.addEventListener('click', () => {
    window.alert("این بخش بزودی فعال میگردد")
})

function aside_move() {
    if (aside.classList.contains("close")) {
        aside.classList.replace("close", "open")
        sections.classList.replace("open", "close")
        setTimeout(change_name1, 300)
    }
    else if (aside.classList.contains("open")) {
        aside.classList.replace("open", "close")
        sections.classList.replace("close", "open")
        setTimeout(change_name2, 300)
    }
}

function change_name1() {
    //ocBtn.textContent = `>`
    profileBtn.textContent = `صفحه کاربری`
    shopBtn.textContent = `خدمات`

}
function change_name2() {
    //ocBtn.textContent = `<`
    shopBtn.textContent = ``
    profileBtn.textContent = ``

}


function ActiveProfileSection() {
    sections.classList.contains("shop") ? sections.classList.replace("shop", "profile") : {}

    if (shopBtn.classList.contains("active")) {
        shopBtn.classList.remove("active")
        profileBtn.classList.add("active")
    }

}
function ActiveShopSection() {
    sections.classList.contains("profile") ? sections.classList.replace("profile", "shop") : {}

    if (profileBtn.classList.contains("active")) {
        profileBtn.classList.remove("active")
        shopBtn.classList.add("active")
    }
}

function ChangeMode() {
    document.body.classList.contains("light") ? document.body.classList.replace("light", "black") : document.body.classList.replace("black", "light")
}

const products_data = [
    {
        "divclass": "web-desiner-container",
        "title": "طراحی و دیزاینری وبسایت",
        "subtitle": [
            "طراحی سایت دلخواه شما",
            "در کمترین زمان"
        ],
        "buttontext": "سایت اختصاصی خود را بسازید",
        "buttonid": "goto_web_shop",
        "picurl": "./assets/section1-web-desining.png"
    },

    {
        "divclass": "bot-developer-container",
        "title": "توسعه و طراحی ربات های مجازی",
        "subtitle": [
            "ربات های پرسرعت",
            "ربات ساده خوش آمد گویی تا پنل های مدیریتی",
            "طراحی در کمترین زمان با حداکثر کارایی",
            "تلگرام ، اینستاگرام ، ..."
        ],
        "buttontext": "ربات خود را داشته باشید",
        "buttonid": "goto-bot-shop",
        "picurl": "./assets/section2-desiningbots-pic.jpg"
    },

    {
        "divclass": "TabchiWix-container",
        "title": "با کمترین هزینه تمام وقت تبلیغات کنید",
        "subtitle": [
            // "TabchiWix تبچی ویکس",
            // "از سری خدمات آماده ما برای شما",
            // "ارسال بنرتان را در تلگرام به ربات تلگرامی ما بسپارید",
            // "مدیریت ربات از طریق پنل سایت یا پنل تلگرامی "
            "بزودی برای شما",
            "یکی از بهترین های ما"
        ],
        "buttontext": "منتظر باشید",
        "buttonid": "goto-Tabchi-shop",
        "picurl": "./assets/section3-TabchiWix.png"
    },
]
for (let i = 0; i < products_data.length; i++) {
    const productdiv = document.createElement('div')
    productdiv.classList.add('product')
    productdiv.classList.add(`${products_data[i]["divclass"]}`)
    i % 2 == 0 ? productdiv.classList.add(`title-right`) : productdiv.classList.add(`title-left`)
    // productdiv.style.background = "linear-gradient(to top right, hsla(277, 100%, 50%, 0.7), hsla(250, 100%, 60%, 0.7))"
    const producttextdiv = document.createElement('div')
    producttextdiv.classList.add('product-text-box')
    const H2 = document.createElement('h2')
    H2.textContent = products_data[i]['title']
    H2.classList.add('title')
    producttextdiv.append(H2)
    nav = document.createElement('nav')
    nav.classList.add('subtitles-container')
    products_data[i]['subtitle'].forEach(sub => {
        strong = document.createElement('strong')
        strong.textContent = sub
        strong.classList.add('subtitle')
        nav.append(strong)
    })
    producttextdiv.append(nav)
    const button = document.createElement('button')
    button.id = products_data[i]['buttonid']
    const BtnP = document.createElement('p')
    BtnP.textContent = products_data[i]['buttontext']
    const BtnSpan = document.createElement('span')
    BtnSpan.textContent = '««'
    button.append(BtnP)
    button.append(BtnSpan)
    producttextdiv.append(button)
    const picdiv = document.createElement('div')
    picdiv.classList.add('product-pic-box')
    picdiv.style.backgroundImage = `url(${products_data[i]['picurl']})`
    productdiv.append(producttextdiv)
    productdiv.append(picdiv)
    sectionShop.append(productdiv)

}

