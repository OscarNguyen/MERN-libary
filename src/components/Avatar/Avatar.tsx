import React from 'react'

type AvatarPropsType = {
  url: string
}
const Avatar: React.FC<AvatarPropsType> = ({ url }) => {
  return (


    <img className="navbar__avatar-img" src={url} />


  )
}

export default Avatar
