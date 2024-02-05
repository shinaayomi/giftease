import HeadShare from '@/components/HeadShare'
import OtpConfirmationModal from '@/layouts/Auth/OtpConfirmationModal'
import React from 'react'

export default function otp() {
  return (
    <div>
      <HeadShare title='OTP' />
      <OtpConfirmationModal/>
    </div>
  )
}
