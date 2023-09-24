export function filterData(searchText, restaurentList) {
          if(searchText) { 
                    let filteredData = restaurentList.filter((filteredList) => {
                              if(filteredList?.info?.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) 
                                        return filteredList;
                              });
                    console.log("filteredData => ",filteredData)
                    return filteredData;
          } else {
                    return restaurentList;
          }
}
