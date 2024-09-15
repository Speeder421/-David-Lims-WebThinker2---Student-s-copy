const calculation=(weight,height)=>{
    let bmi=weight/(height**2);
    return bmi;
};
// const adam=calculation(85,1.8);
// const mary=calculation(65,1.7);
// const jon=calculation(75,1.7);
// console.log("The BMI of Adam is "+adam);
// console.log("The BMI of Mary is "+mary);
// console.log("The BMI of Jon is "+jon);
const onCalcBMIpress = () => {
    let weight=$("#weight-m").val();
    let height=$("#height-m").val();
    let bmi=calculation(weight,height);
    $('#results').removeClass("bg-danger bg-success bg-warning");
    $('#results').html("");
    $('#results').append("<p>Your bmi is "+bmi.toFixed(1)+"</p>");
    
    if (bmi < 18.5){
        
        $('#results').append("<p> Hello skinny, eat more to grow well! </p>");
        $('#results').addClass("bg-danger");
    }
        
    else if (bmi < 25){
        $('#results').append("<p>Hello healthy, you are doing well!</p>");
        $('#results').addClass("bg-success");
    }
    else if (bmi < 30){
        $('#results').append("<p>Hello fatty wannabe, start shaking it of with a workout!</p>");
        $('#results').addClass("bg-warning");
    }
    else{
        $('#results').append("<p>Hello fatty, start shaking it off with excrcise for a longer and better life!</p>");
        $('#results').addClass("bg-danger");
    }
    
};