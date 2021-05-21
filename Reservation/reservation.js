var dateArrive = document.querySelector('#FdaReservation')
var dateDepart = document.querySelector('#FddReservation')
var btn = document.querySelector('.btnFormReservation')

btn.addEventListener('click', function(e) {
    var dateDepartValue = dateDepart.value
    var arrayDateDepartValue = dateDepartValue.split("-")
    var nDepartDateYear = parseInt(arrayDateDepartValue[0])
    var nDepartDateMonth = parseInt(arrayDateDepartValue[1])
    var nDepartDateDay = parseInt(arrayDateDepartValue[2])

    var dateArriveValue = dateArrive.value
    var arrayDateArriveValue = dateArriveValue.split("-")

    var nArriveDateYear = parseInt(arrayDateArriveValue[0])
    var nArriveDateMonth = parseInt(arrayDateArriveValue[1])
    var nArriveDateDay = parseInt(arrayDateArriveValue[2])

    if (nDepartDateYear >= nArriveDateYear) {
        if(nDepartDateMonth >= nArriveDateMonth){
            if(nDepartDateDay >= nArriveDateDay) {
            }else {
                e.preventDefault()
            }
        }else{
            e.preventDefault()
        }
    }else {
        e.preventDefault()
    }
})
















