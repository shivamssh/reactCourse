const Shimmer = () => {
          return (
                    <>
                              {Array(10)
                                        .fill("")
                                        .map((e, index) =>  (
                                                  <div key={index} className="card card-shimmer"></div>
                              ))}    
                    </>                
          );
}

export default Shimmer;