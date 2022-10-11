const Options = ({ datas, correct }) => {
  const clickSubmit = (correct) => {
    //const correctans = datas.find((correctfind) => console.log(correct));
    //console.log(correctans);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 ">
          {datas.map((data) => (
            <button className="m-2 p-2 text-left bg-lime-400 rounded-lg">
              <div>
                <input type="radio" value="Data" name="Data" /> {data}
              </div>
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => clickSubmit(correct.correctAnswer)}
        type="button"
        className="mt-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Submit
      </button>
    </div>
  );
};

export default Options;
