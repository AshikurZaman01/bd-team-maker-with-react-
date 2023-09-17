
const Player = ({player}) => {

    const {name, image, age, salary, strike_rate, position, odi_record, t20_record} = player;

    return (
        <div>
            
            <div>
                <div className="card card-compact bg-base-100 shadow-xl p-4 ">
               
               <div>
                    <img className="w-full md:h-[150px] h-[200px] rounded" src={image} alt={name} />
               </div>
                

                <div className="card-body ">
                    
                    <div className="">
                        <h2 className="text-center font-bold text-[18px]">{name}</h2>
                    </div>
                    
                    <div className="grid grid-cols-2 my-[10px]  ml-[-15px] text-[14px] font-medium text-gray-600">
                    <h3><strong>Age : </strong>{age}</h3>
                    <h3><strong>Salary : </strong>{salary}</h3>
                    <h3><strong>Strike rate : </strong>{strike_rate}</h3>
                    <h3><strong>Role : </strong>{position}</h3>                      
                    </div><hr />

                    <div>
                        <h2 className="text-center font-bold">ODI Records</h2>
                        <div className="grid grid-cols-2 my-[10px]  ml-[-15px] text-[14px] font-medium text-gray-600">
                            <h3><strong>Matches : </strong>{odi_record.matches}</h3>
                            <h3><strong>Runs : </strong>{odi_record.runs}</h3>
                            <h3><strong>Wickets : </strong>{odi_record.runs}</h3>
                        </div>
                    </div><hr />

                    <div>
                        <h2 className="text-center font-bold">T20 Records</h2>
                        <div className="grid grid-cols-2 my-[10px]  ml-[-15px] text-[14px] font-medium text-gray-600">
                            <h3><strong>Matches : </strong>{t20_record.matches}</h3>
                            <h3><strong>Runs : </strong>{t20_record.runs}</h3>
                            <h3><strong>Wickets : </strong>{t20_record.runs}</h3>
                        </div>
                    </div>
                    <button className="btn btn-primary my-[10px]">Select</button>

                </div>
                </div>
            </div>

        </div>
    );
};

export default Player;