<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

$TELEGRAM_BOT_TOKEN = '8926444206:AAGdnD71dd36n89VJQ_suTnNkkhxQC6LenI';
$TELEGRAM_CHAT_ID = '8230693625';

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'message' => 'Dữ liệu không hợp lệ']);
    exit;
}

$name = $input['name'] ?? '';
$phone = $input['phone'] ?? '';
$isNow = $input['isNow'] ?? true;
$date = $input['date'] ?? '';
$time = $input['time'] ?? '';
$cart = $input['cart'] ?? [];

$serveTypeStr = $isNow ? 'Làm ngay tại quán' : 'Đặt lịch trước';
$dateTimeStr = !$isNow ? "\n🗓 <b>Ngày:</b> {$date}\n⏰ <b>Giờ:</b> {$time}" : '';

$cartTextArr = [];
$total = 0;

foreach ($cart as $item) {
    $subtotal = $item['price'] * $item['qty'];
    $total += $subtotal;
    $dur = !empty($item['duration']) ? "({$item['duration']}p)" : '';
    $cartTextArr[] = "- {$item['nameVi']} {$dur}: {$item['qty']} suất x {$item['price']}k";
}

$cartText = implode("\n", $cartTextArr);

$msg = "🛎 <b>CÓ ĐƠN ĐẶT LỊCH MỚI</b> 🛎\n\n";
$msg .= "👤 <b>Khách hàng:</b> {$name}\n";
$msg .= "📞 <b>SĐT:</b> {$phone}\n";
$msg .= "📅 <b>Hình thức:</b> {$serveTypeStr}{$dateTimeStr}\n\n";
$msg .= "📋 <b>Dịch vụ đã chọn:</b>\n{$cartText}\n\n";
$msg .= "💰 <b>Tổng tiền:</b> <b>{$total}k</b>";

$url = "https://api.telegram.org/bot{$TELEGRAM_BOT_TOKEN}/sendMessage";
$postData = [
    'chat_id' => $TELEGRAM_CHAT_ID,
    'text' => $msg,
    'parse_mode' => 'HTML'
];

$options = [
    'http' => [
        'header'  => "Content-Type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($postData)
    ]
];

$context = stream_context_create($options);
$result = @file_get_contents($url, false, $context);

if ($result === FALSE) {
    echo json_encode(['success' => false, 'message' => 'Lỗi kết nối']);
} else {
    echo json_encode(['success' => true]);
}
?>
