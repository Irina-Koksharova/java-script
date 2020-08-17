// Задача 1

const box = {
  styles: {},

  color(value) {
    this.styles.color = value;
    return this; // Это нужно было добавить
  },
  fontSize(value) {
    this.styles.fontSize = value;
    return this; // Это нужно было добавить
  },
  fontWeight(value) {
    this.styles.fontWeight = value;
    return this; // Это нужно было добавить
  },
};

// Сделай так чтобы этот код работал
box.color('red').fontWeight(500).fontSize('24px');

console.log(box.styles);
