import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from 'shared/ui/Button';

describe('renderButton', () => {
  test('renderButton without theme', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('renderButton with ButtonVariant.CLEAR', () => {
    render(<Button variant={ButtonVariant.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    screen.debug();
  });
});
