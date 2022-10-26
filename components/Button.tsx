interface IButtonProps {
  label?: string;
  buttonVariant?: 'primary'|'success'|'danger'
}

function classNames(className: {[key:string]: boolean}): string{
  return Object.entries(className)
    .filter(item => {
      const value = item[1]
      return value
    })
    .map(item => item[0])
    .join(' ')
}

export default function Button ({
  label, 
  buttonVariant = 'primary'
}: IButtonProps) {
  const btnClass = classNames({
    'btn': true,
    [`btn-${buttonVariant}`]: true 
  });
  console.log(btnClass);
  
  return (
    <button className={btnClass}>
      {label}
    </button>
  )
}