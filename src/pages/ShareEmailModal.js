import React, { useState } from 'react';



function ShareEmailModal(props) {

    const { modal, closeModal, shareWithEmailaddress } = props
    const [email, setEmail] = useState('')


    const confirmShareAds = (event) => {
        event.preventDefault()
        shareWithEmailaddress(email)
    }


    return (
        <div id="myModal" className={`modal fade cs--modal scroler-fixed ${modal ? "show" : "hide"}`} style={{ display: modal ? "block" : "none" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Share email address</h5>
                        <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={confirmShareAds} >
                        <div className="modal-body py-4">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="control-label">Email</label>
                                        <input
                                            className="form-control mt-2"
                                            type="email"
                                            value={email}
                                            placeholder='Please enter email..'
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer model-form-savbtn mt-3">
                            <button type="button" onClick={closeModal} className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-success">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ShareEmailModal