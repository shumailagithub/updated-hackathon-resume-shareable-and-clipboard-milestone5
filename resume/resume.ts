let myname = localStorage.getItem("myname")


window.addEventListener('load', () => {

    
    let designation = localStorage.getItem("designation")
    let phone = localStorage.getItem("phone")
    let email = localStorage.getItem("email")
    let address = localStorage.getItem("address")
    let degree = localStorage.getItem("degree")
    let institute = localStorage.getItem("institute")
    let pass = localStorage.getItem("pass")
    let skill1 = localStorage.getItem("skill1")
    let skill2 = localStorage.getItem("skill2")
    let skill3 = localStorage.getItem("skill3")
    let langage1 = localStorage.getItem("langage1")
    let langage2 = localStorage.getItem("langage2")
    let itExpireance = localStorage.getItem("itExpireance")
    let startYear = localStorage.getItem("startYear")
    let endYear = localStorage.getItem("endYear")
    let compony = localStorage.getItem("compony")
    let project1 = localStorage.getItem("project1")
    let project2 = localStorage.getItem("project2")
    let profilePic = localStorage.getItem("profile_pic")


    let resName: any = document.getElementById("resName")
    resName.textContent = myname

    let rsdesi: any = document.getElementById("rsdesi")
    rsdesi.textContent = designation

    let resPhone: any = document.getElementById("resPhone")
    resPhone.textContent = phone
    
    let rsEmail: any = document.getElementById("rsEmail")
    rsEmail.textContent = email
    
    let resadd: any = document.getElementById("resadd")
    resadd.textContent = address

    let resDegree: any = document.getElementById("resDegree")
    resDegree.textContent = degree

    let resInstitute: any = document.getElementById("resInstitute")
    resInstitute.textContent = institute

    let resPassYear: any = document.getElementById("resPassYear")
    resPassYear.textContent = pass

    let resSkill1: any = document.getElementById("resSkill1")
    resSkill1.textContent = skill1

    let resSkill2: any = document.getElementById("resSkill2")
    resSkill2.textContent = skill2
    
    let resSkill3: any = document.getElementById("resSkill3")
    resSkill3.textContent = skill3

    let resLang1: any = document.getElementById("resLang1")
    resLang1.textContent = langage1

    let resLang2: any = document.getElementById("resLang2")
    resLang2.textContent = langage2

    let resItExpireance: any = document.getElementById("resItExpireance")
    resItExpireance.textContent = itExpireance

    let resStartYear: any = document.getElementById("resStartYear")
    resStartYear.textContent = startYear

    let resEndYear: any = document.getElementById("resEndYear")
    resEndYear.textContent = endYear

    let resCompany: any = document.getElementById("resCompany")
    resCompany.textContent = compony

    let resPro1: any = document.getElementById("resPro1")
    resPro1.textContent = project1

    let resPro2: any = document.getElementById("resPro2")
    resPro2.textContent = project2

    let resPic: any = document.getElementById("resPic")
    resPic.src = profilePic
})


// Print Button------------

let print_btn = document.getElementById("print_btn")

print_btn?.addEventListener('click', () => {
    window.print()
})


// Edit Button------------


let edit_btn = document.getElementById("edit_btn")

edit_btn?.addEventListener('click', () =>{
    window.history.back();
})


// shareable Button------------

let share_btn  = document.getElementById("share_btn")
let anc  = document.getElementById("anc")


let userName: string
if(myname){
    userName = myname.toLowerCase().replace(/\s+/g, '-')

}else{
    userName = "user"
}


let baseUrl = "http://127.0.0.1:5500/resume/resume.html"
let uniqueUrl = `${baseUrl}?/${myname}`

share_btn?.addEventListener('click', () => {

    anc?.setAttribute('href', uniqueUrl)
})
//  Copy Button
let copy_btn  = document.getElementById("copy_btn")

copy_btn?.addEventListener('click', () =>{

    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Link Copied")
    })
})