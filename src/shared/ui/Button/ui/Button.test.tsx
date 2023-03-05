import { render, screen } from '@testing-library/react';
import { Button, ButtonDesign } from 'shared/ui/Button';

describe('renderButton', () => {
  test('renderButton without theme', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('renderButton with ButtonDesign.CLEAR', () => {
    render(<Button design={ButtonDesign.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    screen.debug();
  });
});
