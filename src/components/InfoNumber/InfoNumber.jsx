import style from './InfoNumber.module.css'

const InfoNumber = () => {
  return (
    <section className={style.wrapper}>
        <div>
            <h3>4500+ <strong>ACTIVE USERS</strong></h3>
        </div>
        <div>
            <h3>500+ <strong>WORK OF ART</strong></h3>
        </div>
        <div>
            <h3>200+ <strong>MUSEUMS</strong></h3>
        </div>
    </section>
  )
}

export default InfoNumber