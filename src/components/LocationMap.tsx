import React from 'react'

const LocationMap = (props: { height?: number, width?: number }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.3123317833674!2d153.03619089999998!3d-27.4906604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a6a59c188e7%3A0xb0f95ee5e9db79c9!2s6%20Broadway%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1718845192263!5m2!1sen!2sau"
      height={props.height}
      width={props.width}
      style={{ border: 0 }}
      loading="lazy" />
  )
}

export default LocationMap
