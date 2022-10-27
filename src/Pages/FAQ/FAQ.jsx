const FAQ = () => {

  return (
    <div className="max-w-[700px] mx-auto">
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          Can I learn Backend Web Development from this site?
        </div>
        <div className="collapse-content"> 
          <p>Sorry, We only provide tutorials on frontend. Here you can only find frontend tutorials.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          Can I learn more programming languages besides Javascript?
        </div>
        <div className="collapse-content"> 
          <p>Sorry, Here you will find only Frontend programming language which is Javascript. We haven't any tutorial on other languages.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          Do I need prerequisittes?
        </div>
        <div className="collapse-content"> 
          <p>It's Based on your course.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
