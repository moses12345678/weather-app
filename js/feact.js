/*window.setTimeout( function() {
    window.location.reload();
  }, 1000000000);*/

  const api_bit = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/colombus?unitGroup=metric&key=E4XF7KZEEPLAQA2Y6MFCTQZFH&contentType=json";

  //define asunc function

  async function getapi(){
      //storing response
      const response = await fetch(api_bit);
      //Storing dta to JSON
      var data = await response.json();
      console.log(data);
      if(response){
          hideloader();
      }
      show(data);
  }
  //calling the function
  getapi();

  //function to hide the loader
  const hideloader=()=>{
      x = document.getElementById("loading");
      x.style.display ="none";
  }
  //function to define innerHTML tabl
  const show=(data)=>{
      let tab =`
      <tr>
       <th>CloudCover</th>
       <th>Conditions</th>
       <th>Date</th>
       <th>Description</th>
       <th>Views</th>
      </tr>
      `
      //for to acces all row:
      for (const r of data.days){
          tab += `
           <tr>
            <td>${r['cloudcover']}</td>
            <td>${r['conditions']}</td>
            <td>${r['datetime']}</td>
            <td>${r['snow']}</td>
            <td>${r['icon']}</td>
           </tr>
          `
      }
      //add title and the table
      let tit = `the City of ${data.address} today weather ${data.currentConditions.icon}`
      title = document.getElementById("title")
      viewer = document.getElementById("viewer")

      viewer.innerHTML = tab;
      title.innerHTML = tit;

  }

  // Search implementation
  
  const searchBar=()=>{
    search = document.getElementById('search').value;
    //lowersearch = search.toLowerCase()
    filter = search.toUpperCase();
    table = document.getElementById("viewer");
    tr = table.getElementsByTagName("tr");
    noti = document.getElementById("noti")

      // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            
            tr[i].style.display = "";
            //noti.style.display="none";
            
        } else {
            tr[i].style.display = "none";
            //noti.style.display ="block";
            //viewer.innerHTML = `not in the table`
        }
        }
    }
  }




  /*
  fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/colombus?unitGroup=metric&key=E4XF7KZEEPLAQA2Y6MFCTQZFH&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
  */