import React, { Fragment } from "react"
import ResetPassword from "../components/resetPassword/index"

const ResetPasswordContainer = props => {
  const {
    state: { pageDetails, loginUser },
  } = props

  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <div className="content">
            <ResetPassword {...props} />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ResetPasswordContainer
