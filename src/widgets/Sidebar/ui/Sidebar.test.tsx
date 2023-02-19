import { fireEvent, screen } from '@testing-library/react';
import { renderWithTransLation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('renderSidebar', () => {
  test('renderSidebar', () => {
    renderWithTransLation(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('Sidebar-toggle', () => {
    renderWithTransLation(<Sidebar />);
    const toggleBtn = screen.getByTestId('Sidebar-toggle');
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
