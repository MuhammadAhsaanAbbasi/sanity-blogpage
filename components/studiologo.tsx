import React from 'react'
import Image from 'next/image'
const StudioLogo = (props:any) => {
    const {renderDefault, title} = props
    return (
        <div>
            <Image
            src={"./public/assests/profile.jpg"}
            alt='Profile'
            height={100}
            width={100}
            className='rounded-full object-cover'
            />
        <>
        {renderDefault(props)}
        </>
        </div>
    )
}

export default StudioLogo