let Myname: any = document.getElementById("myname");
let designation:any = document.getElementById("designation")
let phone:any = document.getElementById("phone")
let email:any = document.getElementById("email")
let address:any = document.getElementById("address")
let degree:any = document.getElementById("degree")
let institute:any = document.getElementById("institute")
let pass:any = document.getElementById("pass")
let skill1:any = document.getElementById("skill1")
let skill2:any = document.getElementById("skill2")
let skill3:any = document.getElementById("skill3")
let langage1:any = document.getElementById("langage1")
let langage2:any = document.getElementById("langage2")
let itExpireance:any = document.getElementById("itExpireance")
let startYear:any = document.getElementById("startYear")
let endYear:any = document.getElementById("endYear")
let compony:any = document.getElementById("compony")
let project1:any = document.getElementById("project1")
let project2:any = document.getElementById("project2")
let pic:any = document.getElementById("pic")


let submit_btn = document.getElementById("submit_btn")
let form = document.getElementById("form")

form?.addEventListener('submit', (e) =>{
    e.preventDefault()

    localStorage.setItem("myname", Myname.value)
    localStorage.setItem("designation", designation.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("address", address.value)
    localStorage.setItem("degree", degree.value)
    localStorage.setItem("institute", institute.value)
    localStorage.setItem("pass", pass.value)
    localStorage.setItem("skill1", skill1.value)
    localStorage.setItem("skill2", skill2.value)
    localStorage.setItem("skill3", skill3.value)
    localStorage.setItem("langage1", langage1.value)
    localStorage.setItem("langage2", langage2.value)
    localStorage.setItem("itExpireance", itExpireance.value)
    localStorage.setItem("startYear", startYear.value)
    localStorage.setItem("endYear", endYear.value)
    localStorage.setItem("compony", compony.value)
    localStorage.setItem("project1", project1.value)
    localStorage.setItem("designation", project2.value)
    

    if(pic.files && pic.files[0]){
        let reader = new FileReader()
        reader.addEventListener('load', () => {
            let textImg:any =reader.result
            localStorage.setItem("profile_pic", textImg)
        })
        reader.readAsDataURL(pic.files[0])
    }
    

    window.location.href = "./resume/resume.html"
    

})

