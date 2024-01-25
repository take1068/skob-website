"user client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '@/styles/Calendar.css';
import { Box } from '@chakra-ui/react';

const ChakraCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleChange = (newDate: Date | Date[]) => {
    if (newDate instanceof Date) {
      setDate(newDate);
    } else if (newDate.length > 0) {
      // 複数日付を選択可能なカレンダーの場合、最初の日付を設定
      setDate(newDate[0]);
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Calendar
        value={date}
        onClickDay={(e) => handleChange(e)}
        locale='en-EN'
      />
    </Box>
  );
};

export default ChakraCalendar;
