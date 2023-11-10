import { ArrowForward, ArrowForwardIosOutlined, ArrowForwardOutlined, ArrowRight } from "@mui/icons-material"
import { Availabilities_Empty, Clients_Empty, Copy_paste, Positions_Empty } from "../../../data/icons"
import "./experience.css"

const ExperienceFilter = () => {
    const arr=["New","Actual"]
    const icons = ["","",""]
  return (
    <div className="experience-container">
            <div className="experience-block-icons">
                <h4 className="placeholder">.</h4>
            {icons.map(icon=>
                <>
                 <div className="experience-item-icon" style={{background:"none"}}>
                    <img src={""} width={25} alt="" />
                  </div>
                   <div className="experience-item-icon">
                   <img src={Positions_Empty} width={25} alt="" />
                  </div>
                  <div className="experience-item-icon">
                   <img src={Clients_Empty} width={25} alt="" />
                  </div>
                  <div className="experience-item-icon">
                   <img src={Availabilities_Empty} width={25} alt="" />
                  </div>

                </>
                )}
            </div>
        {arr.map(el=>
            <div className="experience-block">
                <h4>{el}</h4>
                <span className={`experience-header`}>
                    <span></span>
                    Last/current experience
                    <img src={Copy_paste} width={15} alt="" />
                  </span>
                  <div className="experience-item">
                        Drilling manager
                  </div>
                  <div className="experience-item">
                        
                  </div>
                  <div className="experience-item-date">
                        <div className="experience-item">
                        September 2022
                        </div>
                        <ArrowForwardIosOutlined/>
                        <div className="experience-item">
                            Ongoing
                        </div>
                  </div>
                <span className={`experience-header`}>
                    <span></span>
                     Experience -2
                    <img src={Copy_paste} width={15} alt="" />
                  </span>
                  <div className="experience-item">
                        
                  </div>
                  <div className="experience-item">
                        
                  </div>
                  <div className="experience-item">
                        
                  </div>
                <span className={`experience-header`}>
                    <span></span>
                    Experience -3
                    <img src={Copy_paste} width={15} alt="" />
                  </span>
                  <div className="experience-item">
                        
                  </div>
                  <div className="experience-item">
                        
                  </div>
                  <div className="experience-item">
                        
                  </div>
            </div>
            )}
    </div>
  )
}

export default ExperienceFilter