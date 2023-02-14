import { type FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}>
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
}
