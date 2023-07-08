import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('Sidebar-toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('Sidebar-toggle');
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
