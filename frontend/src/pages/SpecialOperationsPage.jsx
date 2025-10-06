import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Alert,
  Snackbar,
  Card,
  CardContent,
} from '@mui/material';
import {
  Functions as FunctionsIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import SpecialOperations from '../components/SpecialOperations';

const SpecialOperationsPage = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleOperationComplete = () => {
    // Можно добавить дополнительную логику после выполнения операций
    console.log('Operation completed');
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <FunctionsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
              Специальные операции
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Дополнительные операции для работы с данными работников
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Информационная карточка */}
      <Card elevation={2} sx={{ mb: 3, bgcolor: 'info.light', color: 'info.contrastText' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <InfoIcon />
            <Box>
              <Typography variant="h6" gutterBottom>
                О специальных операциях
              </Typography>
              <Typography variant="body2">
                Здесь собраны специализированные операции для управления работниками:
              </Typography>
              <Box component="ul" sx={{ mt: 1, mb: 0 }}>
                <li><strong>Удаление по рейтингу</strong> - удаляет всех работников с указанным рейтингом</li>
                <li><strong>Сумма рейтингов</strong> - вычисляет сумму рейтингов всех работников</li>
                <li><strong>Поиск по префиксу</strong> - находит работников, чьё имя начинается с заданной подстроки</li>
                <li><strong>Индексация зарплаты</strong> - увеличивает зарплату работника на указанный коэффициент</li>
                <li><strong>Принять на работу</strong> - назначает работника в выбранную организацию</li>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Специальные операции */}
      <SpecialOperations 
        onOperationComplete={handleOperationComplete}
        showSnackbar={showSnackbar}
      />

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SpecialOperationsPage;

