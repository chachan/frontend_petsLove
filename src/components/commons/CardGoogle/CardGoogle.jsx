import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { SERVER, HOST } from 'services/config'
import noImage from './noimg.png'
import styles from './cardGoogle.scss'

const CardGoogle = ({ image, name, email, textButton, id }) => {
  const [isImageNotFound, setIsImageNotFound] = useState(true)

  const onError = useCallback(() => {
    setIsImageNotFound(false)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img
          onError={onError}
          className={styles.imageCard}
          src={image > 0 && isImageNotFound ? `${SERVER}/${image}` : noImage}
          alt="photos-user"
        />
      </div>
      <div className={styles.containerCard}>
        <div className={styles.title}>{name}</div>
        <div className={styles.text}>{email}</div>
        <div className={styles.button}>
          <a className={styles.buttonLink} href={`${HOST}/profile-user/${id}`}>
            {textButton}
          </a>
        </div>
      </div>
    </div>
  )
}

CardGoogle.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default observer(CardGoogle)