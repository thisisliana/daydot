import React from 'react'

const LocationMap = (props: { height?: number, width?: number }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7080.108241129682!2d153.0862022757772!3d-27.46757441661633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91595ce7257a13%3A0x7207197c85470717!2s16%20Barrack%20Rd%2C%20Cannon%20Hill%20QLD%204170!5e0!3m2!1sen!2sau!4v1729072349438!5m2!1sen!2sau"
      height={props.height}
      width={props.width}
      style={{ border: 0 }}
      loading="lazy" />
  )
}

export default LocationMap
