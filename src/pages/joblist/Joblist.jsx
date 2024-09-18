
import "../joblist/joblist.css"

const Joblist =()=>{
    return(
        <div>
        <div className="job-list">
            <div className="job-list-content">
                <h1>HR Team Leader</h1>
                <p>Lagos Nigeria</p>
                <span>January 9, 2023 4:35 am Durham, NC, Part Time</span>
            </div>
        </div>
        <div className="job-description">
            <div className="job-description-content">
                <div className="job-des-left">
                    <h2>Essential Job Functions</h2>
                    <p>Tenete ergo quod si servitus quae natura liber, et aliena tua tunc impeditur. 
                        Dolebis, et turbabuntur, et invenietis, cum culpa tam dis hominibusque. Quod 
                        si tibi tantum sit propria et aliena quale sit, nemo unquam vel invitum te continebis.
                        Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil inuitam. Nemo 
                        nocere tibi erit, et non inimicos, et ne illa laederentur.
                    </p>
                    <div className="job-skill">
                        <ul>
                            <h2>Skill and Knowledge Requirements</h2>
                            <li>Support the operations team in maintaining the restaurant facilities including all fixtures, furniture, and equipment.</li>
                            <li>Utilize the service automation ServiceChannel work order platform to manage all repairs and maintenance (work orders, proposals, and invoices). Expected to be 60% or more of each workday.</li>
                            <li>Utilize written electronic communications (MS Outlook email and ServiceChannel notes) to correspond with internal stakeholders and external service providers.</li>
                            <li>Expected to be in “real-time” throughout the workday.</li>
                            <li>Project manage remodels and assists construction on new store handovers.</li>
                            <li>Develop strategies to execute the department’s objectives in a cost-effective, efficient, and timely manner.</li>
                            <li>Identify, negotiate, and manage regional and national service providers to ensure high performance in SLA compliance.</li>
                        </ul>
                    </div>
                    <div className="benefit">
                        <ul>
                            <h2>Benefits</h2>
                            <li>Up to 4 weeks of vacation per year plus additional sick days</li>
                            <li>Up to 10 Paid Holidays + 1 Floating holidays</li>
                            <li>Company provided Recharge Days to unplug and reenergize</li>
                            <li>Flexible Hybrid Work Environment</li>
                            <li>Competitive bonus program for eligible roles</li>
                            <li>Recognition based culture</li>
                        </ul>
                    </div>
                </div>
                <div className="job-des-right">
                    <div className="need-help">
                        <h2>Need help?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                    </div>
                </div>
                
            </div>
            <form action="">
                <hr />
                <div className="form-input">
                <h1>Apply for this Job</h1>
                <div className="name">
                    <div className="input">
                       <label htmlFor="">First name</label>
                       <input type="text" />
                    </div>
                    <div className="input">
                       <label htmlFor="">First name</label>
                       <input type="text" />
                    </div>
                </div>
                <div className="phone-email">
                    <div className="input">
                       <label htmlFor="">First name</label>
                       <input type="text" />
                    </div>
                    <div className="input">
                       <label htmlFor="">First name</label>
                       <input type="text" />
                    </div>
                </div>
                <div className="comment">
                   <label >Additional information</label>
                   <textarea id="textArea" name="textArea" min="600" max="1000" required placeholder="Add cover letter or anything else you want to share"></textarea>
                </div>
                <label className="label">
                    <input type="radio" className="custom-radio" name="option" /> I have read and agree to the Terms & Conditions
                </label>
                <button>Submit Application</button>
                </div>
            </form>
        </div>
        </div>
    )
}


export default Joblist