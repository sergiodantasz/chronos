import styles from './styles.module.css'

interface DefaultInputProps extends React.ComponentProps<'input'> {
  id: string
  labelText: string
}

export const DefaultInput = ({ id, labelText, ...rest }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        className={styles.input}
        id={id}
        {...rest}
      />
    </>
  )
}
