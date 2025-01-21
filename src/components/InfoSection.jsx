import React from 'react'

function InfoSection() {
  return (
    <section className='infosection'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="infodetails border-right">
                        <h4 className="infohead pb-2">
                            425+
                        </h4>
                        <p className="infotext">
                            Project Delivered
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="infodetails border-right pl-60">
                        <h4 className="infohead pb-2">
                            4M+
                        </h4>
                        <p className="infotext">
                            Happy Client
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="infodetails border-right pl-60">
                        <h4 className="infohead pb-2">
                            670+
                        </h4>
                        <p className="infotext">
                            Skilled Specialist
                        </p>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="infodetails pl-60">
                        <h4 className="infohead pb-2">
                        222+
                        </h4>
                        <p className="infotext">
                            Business Alliences
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default InfoSection