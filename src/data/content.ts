
export interface MindmapNode {
  id: string;
  data: { label: string };
  position: { x: number; y: number };
  type?: string;
  style?: any;
}

export interface MindmapEdge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  style?: any;
  label?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
}

export interface GamePair {
  id: number;
  concept: string;
  definition: string;
}

export const mindmaps: Record<string, { nodes: MindmapNode[], edges: MindmapEdge[] }> = {
  '1': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Đại hội III (1960)' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 50, y: 100 }, data: { label: 'Nhiệm vụ Miền Bắc' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 450, y: 100 }, data: { label: 'Nhiệm vụ Miền Nam' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 50, y: 200 }, data: { label: 'Cách mạng XHCN (Quyết định nhất)' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
      { id: '5', position: { x: 450, y: 200 }, data: { label: 'Cách mạng DTDCND (Quyết định trực tiếp)' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e2-4', source: '2', target: '4', style: { stroke: '#475569' } },
      { id: 'e3-5', source: '3', target: '5', style: { stroke: '#475569' } },
    ]
  },
  '2': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Đại hội IV (1976)' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Thống nhất đất nước' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Xây dựng CNXH' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 400, y: 200 }, data: { label: 'Công nghiệp hóa là trung tâm' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#475569' } },
    ]
  },
  '3': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Đại hội V (1982)' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Nông nghiệp là hàng đầu' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Hai nhiệm vụ chiến lược' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 400, y: 200 }, data: { label: 'Xây dựng & Bảo vệ Tổ quốc' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#475569' } },
    ]
  },
  '4': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Giải phóng dân tộc' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Quyền tự quyết' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Cách mạng vô sản' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 250, y: 200 }, data: { label: 'Giải phóng con người' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-4', source: '1', target: '4', style: { stroke: '#475569' } },
    ]
  },
  '5': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Mối quan hệ biện chứng' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Giải phóng dân tộc' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Thống nhất đất nước' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 250, y: 200 }, data: { label: 'Đại đoàn kết toàn dân' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e2-1', source: '2', target: '1', label: 'Tiền đề', style: { stroke: '#475569' } },
      { id: 'e1-3', source: '1', target: '3', label: 'Kết quả', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-4', source: '1', target: '4', style: { stroke: '#475569' } },
    ]
  },
  '6': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Quá độ lên CNXH' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Bỏ qua chế độ TBCN' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Kế thừa tinh hoa' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 250, y: 200 }, data: { label: 'Kinh tế thị trường định hướng XHCN' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-4', source: '1', target: '4', style: { stroke: '#475569' } },
    ]
  },
  '7': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Hàng hóa' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Giá trị sử dụng' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Giá trị' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 400, y: 200 }, data: { label: 'Lao động xã hội kết tinh' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#475569' } },
    ]
  },
  '8': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Kinh tế thị trường' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Quy luật thị trường' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Sự điều tiết của Nhà nước' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 250, y: 200 }, data: { label: 'Định hướng XHCN' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-4', source: '1', target: '4', style: { stroke: '#475569' } },
    ]
  },
  '9': {
    nodes: [
      { id: '1', position: { x: 250, y: 0 }, data: { label: 'Tiền tệ' }, type: 'input', style: { background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' } },
      { id: '2', position: { x: 100, y: 100 }, data: { label: 'Vật ngang giá chung' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'Các chức năng' }, style: { background: '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: '8px' } },
      { id: '4', position: { x: 400, y: 200 }, data: { label: 'Thước đo giá trị, Lưu thông...' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '10px' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#dc2626' } },
      { id: 'e3-4', source: '3', target: '4', style: { stroke: '#475569' } },
    ]
  }
};

export type GameType = 'matching' | 'ordering' | 'flashcard';

export interface MiniGameData {
  type: GameType;
  title: string;
  description: string;
  data: any;
}

export const quotes = [
  { text: "Hạnh phúc không phải là một điểm đến, mà là một hành trình.", author: "Aristotle" },
  { text: "Tôi tư duy, nên tôi tồn tại.", author: "René Descartes" },
  { text: "Cuộc đời không được kiểm chứng là cuộc đời không đáng sống.", author: "Socrates" },
  { text: "Kẻ nào chiến thắng được chính mình là chiến binh hùng mạnh nhất.", author: "Lão Tử" },
  { text: "Chúng ta là những gì chúng ta lặp đi lặp lại. Sự xuất sắc, vì thế, không phải là một hành động mà là một thói quen.", author: "Aristotle" },
  { text: "Tri thức là sức mạnh.", author: "Francis Bacon" },
  { text: "Không ai tắm hai lần trên cùng một dòng sông.", author: "Heraclitus" },
  { text: "Tự do là sự nhận thức được cái tất yếu.", author: "Friedrich Engels" },
  { text: "Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau, vấn đề là ở chỗ cải tạo thế giới.", author: "Karl Marx" },
  { text: "Đừng sợ đi chậm, chỉ sợ đứng yên.", author: "Khổng Tử" },
  { text: "Sự im lặng là câu trả lời tốt nhất cho sự ngu ngốc.", author: "Pythagoras" },
  { text: "Mọi thứ đều trôi đi, mọi thứ đều biến đổi.", author: "Heraclitus" },
  { text: "Học mà không suy nghĩ thì vô ích, suy nghĩ mà không học thì nguy hiểm.", author: "Khổng Tử" },
  { text: "Sống là phải hành động.", author: "Karl Marx" },
  { text: "Chỉ có lao động mới tạo ra giá trị.", author: "Adam Smith" }
];

export const miniGames: Record<string, MiniGameData> = {
  '1': {
    type: 'matching',
    title: 'Ghép đôi vai trò',
    description: 'Ghép các nhiệm vụ chiến lược với vai trò tương ứng được xác định tại Đại hội III.',
    data: [
      { id: 1, concept: "Cách mạng XHCN Miền Bắc", definition: "Giữ vai trò quyết định nhất đối với sự nghiệp thống nhất." },
      { id: 2, concept: "Cách mạng DTDCND Miền Nam", definition: "Giữ vai trò quyết định trực tiếp đối với giải phóng miền Nam." },
      { id: 3, concept: "Mục tiêu chung", definition: "Hòa bình thống nhất Tổ quốc." },
    ]
  },
  '2': {
    type: 'ordering',
    title: 'Sắp xếp tiến trình lịch sử',
    description: 'Sắp xếp các sự kiện quan trọng sau ngày giải phóng miền Nam theo đúng thứ tự thời gian.',
    data: [
      { id: 1, text: "Giải phóng hoàn toàn miền Nam (30/4)", order: 1 },
      { id: 2, text: "Hội nghị Hiệp thương chính trị thống nhất đất nước", order: 2 },
      { id: 3, text: "Tổng tuyển cử bầu Quốc hội chung cả nước", order: 3 },
      { id: 4, text: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng", order: 4 },
    ]
  },
  '3': {
    type: 'flashcard',
    title: 'Ghi nhớ nội dung Đại hội V',
    description: 'Lật các thẻ để ghi nhớ những điều chỉnh quan trọng trong tư duy của Đảng tại Đại hội V.',
    data: [
      { front: "Mặt trận hàng đầu", back: "Nông nghiệp" },
      { front: "Hai nhiệm vụ chiến lược", back: "Xây dựng CNXH và Bảo vệ Tổ quốc" },
      { front: "Chặng đường hiện tại", back: "Chặng đường đầu tiên của thời kỳ quá độ" },
      { front: "Tư duy mới", back: "Tôn trọng quy luật khách quan" },
    ]
  },
  '4': {
    type: 'matching',
    title: 'Khái niệm giải phóng dân tộc',
    description: 'Ghép các khái niệm lý luận với định nghĩa chính xác theo chủ nghĩa Mác - Lênin.',
    data: [
      { id: 1, concept: "Quyền tự quyết", definition: "Tự do phân lập thành các quốc gia độc lập." },
      { id: 2, concept: "Con đường duy nhất", definition: "Cách mạng vô sản dưới sự lãnh đạo của Đảng." },
      { id: 3, concept: "Mâu thuẫn cơ bản", definition: "Dân tộc bị áp bức vs Chủ nghĩa đế quốc." },
    ]
  },
  '5': {
    type: 'ordering',
    title: 'Logic giải phóng & Thống nhất',
    description: 'Sắp xếp các bước logic trong mối quan hệ giữa giải phóng và thống nhất theo tư tưởng Hồ Chí Minh.',
    data: [
      { id: 1, text: "Xác định mâu thuẫn dân tộc và con đường cứu nước", order: 1 },
      { id: 2, text: "Giải phóng dân tộc khỏi ách nô lệ (Tiền đề)", order: 2 },
      { id: 3, text: "Thống nhất đất nước về mặt lãnh thổ và chính trị", order: 3 },
      { id: 4, text: "Hòa hợp dân tộc và xây dựng xã hội mới", order: 4 },
    ]
  },
  '6': {
    type: 'flashcard',
    title: 'Đặc điểm thời kỳ quá độ',
    description: 'Ghi nhớ các đặc trưng của con đường quá độ lên CNXH tại Việt Nam.',
    data: [
      { front: "Hình thức quá độ", back: "Quá độ gián tiếp (bỏ qua chế độ TBCN)" },
      { front: "Kế thừa", back: "Tiếp thu tinh hoa khoa học, công nghệ nhân loại" },
      { front: "Mục tiêu", back: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh" },
      { front: "Động lực", back: "Đại đoàn kết toàn dân tộc" },
    ]
  },
  '7': {
    type: 'matching',
    title: 'Thuộc tính hàng hóa',
    description: 'Phân biệt giữa Giá trị sử dụng và Giá trị của hàng hóa.',
    data: [
      { id: 1, concept: "Giá trị sử dụng", definition: "Công dụng của vật phẩm thỏa mãn nhu cầu con người." },
      { id: 2, concept: "Giá trị hàng hóa", definition: "Lao động xã hội của người sản xuất kết tinh trong hàng hóa." },
      { id: 3, concept: "Hàng hóa", definition: "Sản phẩm của lao động đi vào tiêu dùng qua trao đổi." },
    ]
  },
  '8': {
    type: 'ordering',
    title: 'Cơ chế thị trường',
    description: 'Sắp xếp các bước vận hành của thị trường từ sản xuất đến tiêu dùng.',
    data: [
      { id: 1, text: "Sản xuất hàng hóa dựa trên nhu cầu dự kiến", order: 1 },
      { id: 2, text: "Đưa hàng hóa vào lưu thông trên thị trường", order: 2 },
      { id: 3, text: "Thị trường thừa nhận giá trị qua việc trao đổi", order: 3 },
      { id: 4, text: "Phân phối lợi nhuận và tái sản xuất mở rộng", order: 4 },
    ]
  },
  '9': {
    type: 'flashcard',
    title: 'Chức năng của tiền tệ',
    description: 'Ghi nhớ 5 chức năng cơ bản của tiền tệ theo kinh tế chính trị Mác - Lênin.',
    data: [
      { front: "Thước đo giá trị", back: "Đo lường và biểu hiện giá trị của hàng hóa" },
      { front: "Phương tiện lưu thông", back: "Làm môi giới trong quá trình trao đổi hàng hóa" },
      { front: "Phương tiện cất trữ", back: "Rút khỏi lưu thông để dự trữ giàu có" },
      { front: "Phương tiện thanh toán", back: "Dùng để trả nợ, nộp thuế, trả tiền mua chịu" },
      { front: "Tiền tệ thế giới", back: "Thực hiện việc mua bán, thanh toán quốc tế" },
    ]
  }
};

export interface Topic {
  id: string;
  title: string;
  summary: string;
  content: string;
  conclusion: string;
  significance: string;
  category: 'Lịch sử' | 'Triết học' | 'Kinh tế';
}

export const topics: Topic[] = [
  {
    id: '1',
    title: 'Đại hội III của Đảng Cộng sản Việt Nam và ý nghĩa đối với cách mạng Việt Nam',
    category: 'Lịch sử',
    summary: 'Đại hội xác định đường lối chiến lược cho hai miền Nam - Bắc trong cuộc kháng chiến chống Mỹ cứu nước (1960).',
    content: `
      <p>Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam diễn ra vào tháng 9 năm 1960 tại Thủ đô Hà Nội, đánh dấu một cột mốc quan trọng trong tiến trình cách mạng dân tộc. Sau chiến thắng Điện Biên Phủ và Hiệp định Giơ-ne-vơ năm 1954, đất nước ta tạm thời bị chia cắt làm hai miền với hai chế độ chính trị khác nhau. Miền Bắc đã hoàn thành công cuộc khôi phục kinh tế, cải tạo xã hội chủ nghĩa và đang bước vào thời kỳ phát triển mới, trong khi miền Nam vẫn nằm dưới ách thống trị tàn bạo của đế quốc Mỹ và chính quyền tay sai Ngô Đình Diệm. Yêu cầu lịch sử lúc bấy giờ là phải xác định được một đường lối chiến lược đúng đắn để dẫn dắt cả dân tộc đi đến thắng lợi cuối cùng.</p>
      
      <p>Nội dung cốt lõi của Đại hội III là việc xác định đường lối chiến lược chung của cách mạng cả nước và đường lối cách mạng ở mỗi miền. Đảng ta đã sáng suốt chỉ rõ: cách mạng Việt Nam trong giai đoạn này có hai nhiệm vụ chiến lược song song. Một là, tiến hành cách mạng xã hội chủ nghĩa ở miền Bắc. Hai là, giải phóng miền Nam khỏi ách thống trị của đế quốc Mỹ và bọn tay sai, thực hiện thống nhất nước nhà, hoàn thành cách mạng dân tộc dân chủ nhân dân trong cả nước. Hai nhiệm vụ chiến lược đó có quan hệ mật thiết với nhau và có tác dụng thúc đẩy lẫn nhau, nhằm mục tiêu chung là hòa bình thống nhất Tổ quốc.</p>
      
      <p>Trong mối quan hệ đó, Đại hội xác định cách mạng xã hội chủ nghĩa ở miền Bắc giữ vai trò quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam và đối với sự nghiệp thống nhất nước nhà. Miền Bắc trở thành hậu phương lớn, là căn cứ địa vững chắc cho cả nước. Trong khi đó, cách mạng dân tộc dân chủ nhân dân ở miền Nam giữ vai trò quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam, đánh đổ ách thống trị của đế quốc Mỹ và tay sai, thực hiện hòa bình thống nhất nước nhà. Đây là một sự vận dụng sáng tạo chủ nghĩa Mác – Lênin vào thực tiễn Việt Nam, tạo nên sức mạnh tổng hợp vô địch.</p>
      
      <p>Về mặt phân tích ý nghĩa, Đại hội III là ngọn cờ tập hợp sức mạnh của toàn dân tộc, kết hợp sức mạnh thời đại với sức mạnh dân tộc. Việc xác định miền Bắc là "hậu phương lớn" không chỉ đơn thuần là sự hỗ trợ về vật chất mà còn là biểu tượng của niềm tin và ý chí thống nhất. Đường lối này đã soi đường cho nhân dân ta vượt qua mọi gian khổ, hy sinh, đánh bại các chiến lược chiến tranh của đế quốc Mỹ, từ "Chiến tranh đặc biệt", "Chiến tranh cục bộ" đến "Việt Nam hóa chiến tranh", tạo tiền đề vững chắc cho đại thắng mùa Xuân năm 1975.</p>
    `,
    conclusion: 'Đại hội III là "Đại hội xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà", đặt nền móng cho mọi thắng lợi sau này.',
    significance: 'Bài học về việc xác định đúng đắn nhiệm vụ chiến lược trong từng giai đoạn vẫn còn nguyên giá trị. Trong thời đại mới, việc kết hợp giữa phát triển kinh tế bền vững (hậu phương) và bảo vệ chủ quyền quốc gia (tiền phương) là yếu tố sống còn để giữ vững sự ổn định và vị thế của Việt Nam.'
  },
  {
    id: '2',
    title: 'Đại hội IV của Đảng Cộng sản Việt Nam và định hướng xây dựng chủ nghĩa xã hội sau thống nhất đất nước',
    category: 'Lịch sử',
    summary: 'Đại hội đánh dấu bước ngoặt lịch sử khi cả nước cùng đi lên chủ nghĩa xã hội sau năm 1975.',
    content: `
      <p>Tháng 12 năm 1976, Đại hội đại biểu toàn quốc lần thứ IV của Đảng diễn ra trong không khí hân hoan của một dân tộc vừa quét sạch bóng quân xâm lược, non sông thu về một mối. Đây là đại hội đầu tiên của Đảng sau khi nước nhà hoàn toàn thống nhất, mang trọng trách vạch ra con đường phát triển cho một quốc gia vừa bước ra khỏi khói lửa chiến tranh với muôn vàn khó khăn. Đất nước lúc bấy giờ không chỉ phải đối mặt với sự tàn phá nặng nề về cơ sở hạ tầng mà còn phải giải quyết những vấn đề phức tạp về xã hội và sự khác biệt giữa hai miền sau nhiều năm chia cắt.</p>
      
      <p>Đại hội IV đã tổng kết thắng lợi vĩ đại của cuộc kháng chiến chống Mỹ cứu nước và đề ra đường lối cách mạng xã hội chủ nghĩa cho cả nước. Đảng xác định nhiệm vụ trọng tâm là đẩy mạnh công nghiệp hóa xã hội chủ nghĩa, coi đó là nhiệm vụ trung tâm của cả thời kỳ quá độ. Đại hội cũng nhấn mạnh việc thiết lập chế độ làm chủ tập thể xã hội chủ nghĩa, xây dựng nền sản xuất lớn xã hội chủ nghĩa, nền văn hóa mới và con người mới xã hội chủ nghĩa. Tên Đảng cũng được đổi từ Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam, khẳng định bản chất giai cấp công nhân và mục tiêu cộng sản chủ nghĩa.</p>
      
      <p>Phân tích dưới góc độ lịch sử, Đại hội IV thể hiện khát vọng mãnh liệt của dân tộc về một xã hội công bằng, văn minh. Mặc dù trong quá trình thực hiện còn có những hạn chế do tư duy chủ quan, duy ý chí về kinh tế, nóng vội trong việc xóa bỏ các thành phần kinh tế phi xã hội chủ nghĩa, nhưng tinh thần đoàn kết và quyết tâm xây dựng lại đất nước từ Đại hội IV đã tạo ra nguồn lực tinh thần to lớn. Đây là bước đi đầu tiên đầy dũng cảm để định hình bản sắc của nước Việt Nam thống nhất trên bản đồ thế giới hiện đại, khẳng định ý chí tự lực tự cường của dân tộc.</p>
      
      <p>Ý nghĩa lịch sử của Đại hội IV còn nằm ở việc khẳng định con đường đi lên chủ nghĩa xã hội là con đường duy nhất đúng đắn để giữ vững độc lập dân tộc và mang lại hạnh phúc cho nhân dân. Việc thống nhất đất nước về mặt nhà nước và về mặt chính trị đã tạo ra không gian phát triển rộng lớn, cho phép huy động sức mạnh của toàn dân vào công cuộc kiến thiết. Những bài học về quản lý kinh tế và xã hội từ giai đoạn này đã trở thành tiền đề quan trọng để Đảng ta thực hiện công cuộc Đổi mới sau này, minh chứng cho sự trưởng thành của Đảng trong lãnh đạo cách mạng.</p>
    `,
    conclusion: 'Đại hội IV là đại hội của sự thống nhất hoàn toàn về mặt tổ chức và tư tưởng, mở ra kỷ nguyên độc lập, thống nhất cho dân tộc.',
    significance: 'Tinh thần tự lực tự cường và khát vọng thống nhất từ Đại hội IV vẫn là động lực để chúng ta vượt qua mọi rào cản. Việc hiểu rõ những bài học về quản lý kinh tế giai đoạn này giúp chúng ta trân trọng hơn những thành quả của công cuộc Đổi mới và kiên trì mục tiêu dân giàu, nước mạnh.'
  },
  {
    id: '3',
    title: 'Đại hội V của Đảng Cộng sản Việt Nam dưới góc nhìn triết học Mác – Lênin',
    category: 'Lịch sử',
    summary: 'Sự điều chỉnh tư duy kinh tế và chiến lược phát triển trong bối cảnh khủng hoảng (1982).',
    content: `
      <p>Đại hội đại biểu toàn quốc lần thứ V của Đảng diễn ra vào tháng 3 năm 1982, trong bối cảnh đất nước đang đối mặt với những thách thức nghiêm trọng về kinh tế - xã hội và tình hình quốc tế phức tạp. Sau 5 năm thực hiện nghị quyết Đại hội IV, bên cạnh những thành tựu bước đầu, nền kinh tế nước ta rơi vào tình trạng khủng hoảng, lạm phát phi mã, đời sống nhân dân gặp nhiều khó khăn. Dưới lăng kính triết học Mác – Lênin, đây là giai đoạn Đảng ta thực hiện sự tự phê bình sâu sắc, nhìn thẳng vào những sai lầm chủ quan để điều chỉnh đường lối cho phù hợp với quy luật khách quan.</p>
      
      <p>Đại hội V đã xác định trong chặng đường đầu tiên của thời kỳ quá độ, phải lấy nông nghiệp làm mặt trận hàng đầu, kết hợp nông nghiệp, công nghiệp hàng tiêu dùng và công nghiệp nặng trong một cơ cấu kinh tế hợp lý. Đây là sự vận dụng quy luật về sự phù hợp của quan hệ sản xuất với tính chất và trình độ của lực lượng sản xuất. Đảng cũng xác định hai nhiệm vụ chiến lược là xây dựng thành công chủ nghĩa xã hội và sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa. Sự điều chỉnh này cho thấy Đảng đã bắt đầu nhận thức rõ hơn về các bước đi trong thời kỳ quá độ.</p>
      
      <p>Về mặt triết học, Đại hội V đánh dấu sự chuyển biến từ tư duy giáo điều sang tư duy thực tiễn. Việc thừa nhận những khó khăn và sai lầm chủ quan, duy ý chí là biểu hiện của tinh thần khoa học, dám nhìn nhận sự thật để tìm ra lối thoát. Ý nghĩa triết học lớn nhất ở đây là bài học về việc tôn trọng quy luật khách quan, tránh đốt cháy giai đoạn. Đảng đã nhận thấy rằng không thể tiến nhanh lên chủ nghĩa xã hội khi lực lượng sản xuất còn quá yếu kém, từ đó đề ra những bước đi thận trọng và thực tế hơn, ưu tiên giải quyết vấn đề lương thực và hàng tiêu dùng.</p>
      
      <p>Đại hội V cũng nhấn mạnh tầm quan trọng của việc kết hợp sức mạnh dân tộc với sức mạnh thời đại, tranh thủ sự ủng hộ của các nước xã hội chủ nghĩa và bạn bè quốc tế. Việc xác định đúng đắn các nhiệm vụ chiến lược và bước đi trong thời kỳ quá độ đã giúp đất nước dần ổn định tình hình, chuẩn bị những tiền đề lý luận cần thiết cho công cuộc Đổi mới toàn diện vào năm 1986. Đây là minh chứng cho bản lĩnh của một Đảng cách mạng luôn biết tự làm mới mình, lấy thực tiễn làm thước đo chân lý để dẫn dắt dân tộc vượt qua thác ghềnh.</p>
    `,
    conclusion: 'Đại hội V là đại hội của sự điều chỉnh chiến lược, khẳng định quyết tâm bảo vệ và xây dựng Tổ quốc trong tình hình mới.',
    significance: 'Bài học về việc tôn trọng quy luật khách quan và lấy thực tiễn làm thước đo chân lý từ Đại hội V vẫn luôn thời sự. Trong kỷ nguyên số, việc dám nhìn thẳng vào những hạn chế để thay đổi mô hình tăng trưởng là chìa khóa để Việt Nam phát triển bền vững.'
  },
  {
    id: '4',
    title: 'Khái niệm giải phóng dân tộc theo lý luận Mác – Lênin',
    category: 'Triết học',
    summary: 'Lý luận về quyền tự quyết và con đường giải phóng các dân tộc bị áp bức.',
    content: `
      <p>Lý luận về giải phóng dân tộc của chủ nghĩa Mác – Lênin ra đời như một luồng sáng mới cho các dân tộc thuộc địa đang rên xiết dưới ách thống trị của chủ nghĩa thực dân. V.I. Lênin đã phát triển luận điểm của Mác về vấn đề dân tộc, khẳng định rằng trong thời đại chủ nghĩa đế quốc, cuộc đấu tranh giải phóng dân tộc là một bộ phận khăng khít của cách mạng vô sản thế giới. Lênin chỉ rõ mâu thuẫn giữa các dân tộc bị áp bức và chủ nghĩa đế quốc là một trong những mâu thuẫn cơ bản của thời đại, và việc giải quyết mâu thuẫn này là tất yếu khách quan.</p>
      
      <p>Nội dung cốt lõi của khái niệm này là quyền tự quyết của các dân tộc, bao gồm quyền hoàn toàn tự do phân lập thành các quốc gia độc lập. Tuy nhiên, lý luận Mác – Lênin cũng chỉ rõ rằng giải phóng dân tộc không chỉ là đánh đuổi quân xâm lược mà còn phải gắn liền với giải phóng giai cấp và giải phóng con người. Chỉ có đi theo con đường cách mạng vô sản, dưới sự lãnh đạo của Đảng Cộng sản, cuộc cách mạng giải phóng dân tộc mới có thể giành được thắng lợi triệt để, xóa bỏ mọi hình thức áp bức, bóc lột và tiến tới xây dựng một xã hội công bằng, văn minh.</p>
      
      <p>Phân tích dưới góc độ triết học, giải phóng dân tộc là sự giải quyết mâu thuẫn giữa lực lượng sản xuất bị kìm hãm bởi ách thực dân và quan hệ sản xuất thực dân lỗi thời. Ý nghĩa của lý luận này nằm ở chỗ nó tạo ra sự liên minh tự nhiên giữa giai cấp công nhân ở các nước chính quốc và nhân dân lao động ở các nước thuộc địa. Đối với Việt Nam, lý luận này đã giúp Nguyễn Ái Quốc tìm thấy con đường cứu nước đúng đắn, khẳng định rằng muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản, gắn độc lập dân tộc với chủ nghĩa xã hội.</p>
      
      <p>Lý luận giải phóng dân tộc theo quan điểm Mác-xít còn nhấn mạnh tính chủ động và sáng tạo của các dân tộc thuộc địa. Lênin cho rằng cách mạng ở các nước thuộc địa không nhất thiết phải chờ đợi cách mạng ở các nước chính quốc thành công mà có thể nổ ra và giành thắng lợi trước, góp phần thúc đẩy cách mạng thế giới. Tư tưởng này đã cổ vũ mạnh mẽ phong trào đấu tranh của các dân tộc bị áp bức trên toàn cầu, tạo nên một làn sóng giải phóng dân tộc mạnh mẽ trong thế kỷ XX, làm sụp đổ hoàn toàn hệ thống thuộc địa của chủ nghĩa thực dân cũ.</p>
    `,
    conclusion: 'Giải phóng dân tộc theo lý luận Mác – Lênin là cuộc cách mạng toàn diện, hướng tới sự tự do và bình đẳng thực sự giữa các dân tộc.',
    significance: 'Trong thế giới đa cực hiện nay, lý luận về giải phóng dân tộc giúp chúng ta nhận thức rõ giá trị của độc lập, tự chủ. Nó nhắc nhở thế hệ trẻ rằng độc lập dân tộc phải luôn gắn liền với tiến bộ xã hội và giữ vững bản sắc văn hóa dân tộc.'
  },
  {
    id: '5',
    title: 'Mối quan hệ giữa giải phóng dân tộc và thống nhất đất nước trong tư tưởng Hồ Chí Minh',
    category: 'Triết học',
    summary: 'Sự gắn kết hữu cơ giữa độc lập dân tộc và toàn vẹn lãnh thổ trong tư duy chiến lược của Người.',
    content: `
      <p>Trong tư tưởng Hồ Chí Minh, giải phóng dân tộc và thống nhất đất nước không phải là hai mục tiêu tách rời mà là một thể thống nhất biện chứng. Người luôn khẳng định: "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi". Đây là sợi chỉ đỏ xuyên suốt toàn bộ sự nghiệp cách mạng của Người, phản ánh khát vọng cháy bỏng về một Tổ quốc vẹn tròn, độc lập và tự do. Đối với Người, độc lập mà không thống nhất thì độc lập đó chưa hoàn toàn, thống nhất mà không độc lập thì thống nhất đó vô nghĩa.</p>
      
      <p>Mối quan hệ biện chứng này thể hiện ở chỗ: giải phóng dân tộc là tiền đề, là điều kiện tiên quyết để thực hiện thống nhất đất nước. Nếu dân tộc chưa được giải phóng khỏi ách nô lệ thì không thể nói đến sự thống nhất thực sự. Ngược lại, thống nhất đất nước là sự hoàn thiện, là kết quả tất yếu của quá trình giải phóng dân tộc. Thống nhất đất nước tạo ra sức mạnh tổng hợp để bảo vệ thành quả của giải phóng dân tộc, tạo không gian sinh tồn và phát triển bền vững cho toàn thể nhân dân. Hồ Chí Minh luôn nhấn mạnh rằng sự nghiệp giải phóng miền Nam và thống nhất nước nhà là nhiệm vụ thiêng liêng của cả dân tộc.</p>
      
      <p>Phân tích sâu hơn, tư tưởng này mang tính nhân văn và chính trị sâu sắc. Thống nhất trong tư tưởng Hồ Chí Minh không chỉ là sự thống nhất về mặt địa lý mà còn là sự hòa hợp dân tộc, xóa bỏ mọi chia rẽ do kẻ thù gây ra. Ý nghĩa triết học ở đây là sự thống nhất giữa cái riêng (từng vùng miền) và cái chung (quốc gia dân tộc). Người luôn kêu gọi đại đoàn kết toàn dân, không phân biệt giai cấp, tôn giáo, chính kiến, miễn là có lòng yêu nước và khát vọng thống nhất. Chính ý chí "không có gì quý hơn độc lập tự do" gắn liền với mục tiêu thống nhất đã tạo nên sức mạnh vô song.</p>
      
      <p>Tư tưởng Hồ Chí Minh về mối quan hệ này còn thể hiện sự kết hợp nhuần nhuyễn giữa chủ nghĩa yêu nước chân chính và chủ nghĩa quốc tế vô sản. Người tranh thủ sự ủng hộ của nhân dân yêu chuộng hòa bình trên thế giới cho cuộc đấu tranh chính nghĩa của nhân dân Việt Nam. Việc thực hiện thống nhất đất nước không chỉ là nguyện vọng của nhân dân Việt Nam mà còn đóng góp vào phong trào giải phóng dân tộc và hòa bình thế giới. Ngày nay, di sản này vẫn tiếp tục soi sáng con đường xây dựng và bảo vệ Tổ quốc, nhắc nhở chúng ta về sức mạnh của sự đoàn kết và thống nhất.</p>
    `,
    conclusion: 'Giải phóng dân tộc gắn liền với thống nhất đất nước là quy luật tồn tại và phát triển của dân tộc Việt Nam.',
    significance: 'Bài học về sự thống nhất và đại đoàn kết dân tộc vẫn là kim chỉ nam cho công cuộc xây dựng đất nước. Trong bối cảnh toàn cầu hóa, việc giữ vững sự thống nhất về tư tưởng và hành động là yếu tố then chốt để bảo vệ chủ quyền.'
  },
  {
    id: '6',
    title: 'Con đường quá độ lên chủ nghĩa xã hội ở Việt Nam',
    category: 'Triết học',
    summary: 'Lý luận về thời kỳ quá độ bỏ qua chế độ tư bản chủ nghĩa tại Việt Nam.',
    content: `
      <p>Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là một sự lựa chọn lịch sử đúng đắn, phù hợp với quy luật khách quan và điều kiện cụ thể của Việt Nam. Theo lý luận Mác – Lênin, thời kỳ quá độ là một giai đoạn tất yếu để biến đổi sâu sắc, toàn diện trên tất cả các lĩnh vực, nhằm xây dựng những tiền đề vật chất và tinh thần cho xã hội mới. Đối với một nước nông nghiệp lạc hậu như Việt Nam, việc đi thẳng lên chủ nghĩa xã hội là một quá trình lâu dài, gian khổ và vô cùng phức tạp, đòi hỏi sự sáng tạo trong vận dụng lý luận.</p>
      
      <p>Nội dung của con đường quá độ ở Việt Nam là việc bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng phải tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản, đặc biệt là về khoa học và công nghệ. Đây là quá trình xây dựng lực lượng sản xuất hiện đại đi đôi với việc thiết lập quan hệ sản xuất tiến bộ, phù hợp. Đảng ta xác định đây là một quá trình lâu dài, trải qua nhiều chặng đường với những hình thức tổ chức kinh tế, xã hội trung gian, quá độ, nhằm mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.</p>
      
      <p>Phân tích dưới góc độ triết học, quá độ lên chủ nghĩa xã hội là sự phủ định biện chứng đối với chế độ cũ. Ý nghĩa của con đường này là giúp dân tộc Việt Nam tránh được những nỗi đau khổ của sự phát triển tư bản chủ nghĩa và tiến tới một xã hội không còn người bóc lột người. Việc kiên định con đường này khẳng định niềm tin vào tương lai tươi sáng của dân tộc, đồng thời đòi hỏi sự sáng tạo không ngừng trong việc tìm tòi các mô hình, bước đi phù hợp. Chúng ta phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa như một công cụ để xây dựng cơ sở vật chất cho chủ nghĩa xã hội.</p>
      
      <p>Thời kỳ quá độ ở Việt Nam cũng nhấn mạnh vai trò lãnh đạo của Đảng Cộng sản và sự quản lý của Nhà nước pháp quyền xã hội chủ nghĩa. Việc xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc và con người mới xã hội chủ nghĩa là những nhiệm vụ không thể tách rời. Con đường này không phải là một đường thẳng tắp mà có những khúc quanh, đòi hỏi chúng ta phải luôn kiên định mục tiêu nhưng linh hoạt về biện pháp. Những thành tựu của công cuộc Đổi mới đã minh chứng cho tính đúng đắn của con đường mà Đảng và nhân dân ta đã lựa chọn.</p>
    `,
    conclusion: 'Quá độ lên chủ nghĩa xã hội là sự lựa chọn duy nhất đúng đắn để thực hiện mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.',
    significance: 'Hiểu rõ về thời kỳ quá độ giúp chúng ta có cái nhìn thực tế và kiên định trước những khó khăn. Trong giai đoạn hiện nay, việc đẩy mạnh công nghiệp hóa, hiện đại hóa chính là cách thức cụ thể để rút ngắn thời kỳ quá độ.'
  },
  {
    id: '7',
    title: 'Khái niệm hàng hóa và hai thuộc tính của hàng hóa',
    category: 'Kinh tế',
    summary: 'Hàng hóa là tế bào của nền kinh tế thị trường và là sản phẩm của lao động kết tinh.',
    content: `
      <p>Trong bộ "Tư bản" vĩ đại, Các Mác đã bắt đầu sự phân tích của mình từ hàng hóa – thực thể đơn giản nhất nhưng chứa đựng mọi mâu thuẫn của phương thức sản xuất hàng hóa. Theo kinh tế chính trị Mác – Lênin, hàng hóa là sản phẩm của lao động, có thể thỏa mãn một nhu cầu nào đó của con người và được sản xuất ra để trao đổi thông qua mua bán trên thị trường. Một vật phẩm chỉ trở thành hàng hóa khi nó hội đủ ba yếu tố: là sản phẩm của lao động, có ích cho con người và được đưa vào lưu thông thông qua trao đổi.</p>
      
      <p>Hàng hóa có hai thuộc tính cơ bản là giá trị sử dụng và giá trị. Giá trị sử dụng là công dụng của vật phẩm có thể thỏa mãn một nhu cầu nào đó của con người, dù đó là nhu cầu cho tiêu dùng cá nhân hay nhu cầu cho sản xuất. Giá trị sử dụng do thuộc tính tự nhiên của vật thể hàng hóa quyết định và là nội dung vật chất của giàu có. Một hàng hóa có thể có nhiều giá trị sử dụng khác nhau tùy thuộc vào sự phát triển của khoa học kỹ thuật. Tuy nhiên, trong kinh tế hàng hóa, giá trị sử dụng là vật mang giá trị trao đổi.</p>
      
      <p>Thuộc tính thứ hai, quan trọng hơn về mặt kinh tế chính trị, là giá trị. Giá trị là lao động xã hội của người sản xuất hàng hóa kết tinh trong hàng hóa đó. Giá trị là nội dung, là cơ sở của giá trị trao đổi. Nếu giá trị sử dụng phản ánh quan hệ giữa người với vật thì giá trị phản ánh quan hệ xã hội giữa những người sản xuất hàng hóa với nhau. Hai thuộc tính này vừa thống nhất vừa mâu thuẫn: người sản xuất tạo ra giá trị sử dụng nhưng mục đích là để thực hiện giá trị; người tiêu dùng cần giá trị sử dụng nhưng phải trả giá trị để có được nó.</p>
      
      <p>Phân tích ý nghĩa của hai thuộc tính này giúp chúng ta hiểu tại sao các hàng hóa khác nhau về công dụng lại có thể trao đổi được với nhau theo một tỷ lệ nhất định. Đó là vì chúng đều là kết quả của lao động trừu tượng. Ý nghĩa thực tiễn của lý luận này là thúc đẩy các doanh nghiệp không ngừng cải tiến kỹ thuật để giảm hao phí lao động cá biệt, từ đó tăng lợi nhuận và nâng cao chất lượng giá trị sử dụng để được thị trường chấp nhận. Việc hiểu rõ bản chất hàng hóa là cơ sở để vận hành nền kinh tế thị trường định xuất xã hội chủ nghĩa một cách hiệu quả.</p>
    `,
    conclusion: 'Hàng hóa là khởi điểm của mọi nghiên cứu về kinh tế thị trường, phản ánh bản chất của lao động và quan hệ xã hội.',
    significance: 'Trong nền kinh tế thị trường, việc phát triển mạnh mẽ sản xuất hàng hóa là chìa khóa để tăng trưởng kinh tế. Hiểu rõ bản chất hàng hóa giúp chúng ta xây dựng các thương hiệu quốc gia mạnh và nâng cao sức cạnh tranh.'
  },
  {
    id: '8',
    title: 'Thị trường và nền kinh tế thị trường',
    category: 'Kinh tế',
    summary: 'Cơ chế vận hành của nền kinh tế dựa trên các quy luật thị trường và vai trò điều tiết của Nhà nước.',
    content: `
      <p>Thị trường là tổng hòa các mối quan hệ kinh tế, trong đó việc trao đổi hàng hóa và dịch vụ được thực hiện giữa các chủ thể thông qua cơ chế giá cả và cạnh tranh. Thị trường thực hiện các chức năng cơ bản như: chức năng thừa nhận (thừa nhận lao động xã hội kết tinh trong hàng hóa), chức năng thông tin (cung cấp dữ liệu về giá cả, cung cầu) và chức năng điều tiết, kích thích sản xuất. Trong nền kinh tế hiện đại, thị trường đóng vai trò là "bàn tay vô hình" giúp phân bổ các nguồn lực xã hội một cách hiệu quả nhất.</p>
      
      <p>Nền kinh tế thị trường là giai đoạn phát triển cao của kinh tế hàng hóa, nơi mọi yếu tố sản xuất đều được đưa vào trao đổi trên thị trường. Ở Việt Nam, chúng ta xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa. Đây là mô hình kinh tế vận hành theo các quy luật của thị trường nhưng có sự quản lý, điều tiết của Nhà nước pháp quyền xã hội chủ nghĩa nhằm mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Sự kết hợp này nhằm phát huy ưu điểm của thị trường và khắc phục những khuyết tật của nó như khủng hoảng, phân hóa giàu nghèo.</p>
      
      <p>Vai trò điều tiết của Nhà nước trong nền kinh tế thị trường là vô cùng quan trọng. Nhà nước tạo lập khung khổ pháp lý, ổn định kinh tế vĩ mô, khắc phục các thất bại của thị trường và thực hiện công bằng xã hội. Nhà nước sử dụng các công cụ như thuế, lãi suất, đầu tư công để định hướng phát triển. Ý nghĩa của sự điều tiết này là nhằm đảm bảo tăng trưởng kinh tế đi đôi với tiến bộ và công bằng xã hội, không để ai bị bỏ lại phía sau. Đây là sự kết hợp biện chứng giữa hiệu quả kinh tế và mục tiêu nhân văn.</p>
      
      <p>Phân tích sâu hơn, nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam không chỉ là một mô hình kinh tế mà còn là một phương thức để thực hiện mục tiêu xã hội chủ nghĩa. Việc thừa nhận và phát triển nhiều thành phần kinh tế, trong đó kinh tế nhà nước giữ vai trò chủ đạo, tạo ra động lực phát triển mạnh mẽ. Thị trường là môi trường để các doanh nghiệp cạnh tranh và lớn mạnh, đồng thời là thước đo hiệu quả của các chính sách kinh tế. Sự thành công của công cuộc Đổi mới đã khẳng định tính đúng đắn của mô hình này trong thực tiễn.</p>
    `,
    conclusion: 'Thị trường là môi trường và động lực của sản xuất hàng hóa, trong khi sự điều tiết của Nhà nước đảm bảo tính định hướng xã hội.',
    significance: 'Việc hoàn thiện thể chế kinh tế thị trường là một trong ba đột phá chiến lược của Việt Nam. Hiểu rõ vai trò thị trường giúp chúng ta xây dựng môi trường kinh doanh minh bạch và thúc đẩy tinh thần khởi nghiệp.'
  },
  {
    id: '9',
    title: 'Tiền tệ và vai trò của tiền tệ trong kinh tế thị trường',
    category: 'Kinh tế',
    summary: 'Tiền tệ là hàng hóa đặc biệt đóng vai trò vật ngang giá chung và là huyết mạch của nền kinh tế.',
    content: `
      <p>Tiền tệ là kết quả tất yếu của quá trình phát triển lâu dài của sản xuất và trao đổi hàng hóa. Theo Các Mác, tiền tệ là một loại hàng hóa đặc biệt được tách ra từ thế giới hàng hóa để đóng vai trò vật ngang giá chung thống nhất cho tất cả các hàng hóa khác. Tiền tệ thể hiện lao động xã hội và phản ánh quan hệ kinh tế giữa những người sản xuất. Sự ra đời của tiền tệ đã giải quyết mâu thuẫn giữa giá trị sử dụng và giá trị của hàng hóa, giúp việc trao đổi trở nên thuận tiện và mở rộng quy mô sản xuất.</p>
      
      <p>Tiền tệ thực hiện các chức năng cơ bản như: thước đo giá trị (đo lường giá trị hàng hóa), phương tiện lưu thông (môi giới trao đổi), phương tiện cất trữ (dự trữ giàu có), phương tiện thanh toán (trả nợ, nộp thuế) và tiền tệ thế giới (giao dịch quốc tế). Trong nền kinh tế thị trường hiện đại, tiền tệ không chỉ tồn tại dưới dạng tiền mặt mà còn phát triển mạnh mẽ dưới dạng tiền điện tử, tiền kỹ thuật số. Vai trò của tiền tệ ngày càng trở nên quan trọng, tác động đến mọi ngóc ngách của đời sống kinh tế - xã hội.</p>
      
      <p>Vai trò của tiền tệ trong sự vận hành của nền kinh tế thị trường thể hiện ở việc nó là "chất bôi bơn" cho các giao dịch và là công cụ điều tiết vĩ mô. Thông qua chính sách tiền tệ, Nhà nước có thể kiểm soát lạm phát, ổn định giá trị đồng tiền và kích thích tăng trưởng kinh tế. Tiền tệ cũng là phương tiện để tích lũy và tập trung vốn, tạo nguồn lực cho đầu tư phát triển. Một hệ thống tiền tệ ổn định là nền tảng cho sự tin tưởng của các nhà đầu tư và sự vận hành trơn tru của toàn bộ hệ thống tài chính quốc gia.</p>
      
      <p>Phân tích ý nghĩa của tiền tệ, chúng ta thấy nó phản ánh sức mạnh kinh tế và niềm tin quốc gia. Việc quản lý tiền tệ hiệu quả giúp bảo vệ sức mua của nhân dân và thúc đẩy xuất khẩu. Trong bối cảnh hội nhập quốc tế, vai trò của tiền tệ thế giới càng trở nên rõ nét, đòi hỏi chúng ta phải có chính sách tỷ giá linh hoạt và an toàn. Tiền tệ không chỉ là công cụ kinh tế mà còn mang ý nghĩa chính trị, thể hiện chủ quyền quốc gia. Hiểu rõ bản chất và vai trò của tiền tệ giúp chúng ta có tư duy tài chính đúng đắn trong thời đại kinh tế số.</p>
    `,
    conclusion: 'Tiền tệ là công cụ vạn năng và là huyết mạch của nền kinh tế, quyết định sự thịnh vượng của quốc gia.',
    significance: 'Việc quản lý tốt giá trị đồng tiền Việt Nam và phát triển hệ thống thanh toán hiện đại là yếu tố then chốt để thúc đẩy kinh tế số. Hiểu biết về tiền tệ giúp sinh viên có tư duy tài chính đúng đắn và trách nhiệm.'
  }
];

export const quizzes: Record<string, QuizQuestion[]> = {
  '1': [
    {
      question: 'Đại hội III của Đảng diễn ra vào thời gian nào?',
      options: ['Tháng 9/1954', 'Tháng 9/1960', 'Tháng 12/1976', 'Tháng 3/1982'],
      correctAnswer: 1,
      explanation: 'Đại hội đại biểu toàn quốc lần thứ III của Đảng diễn ra vào tháng 9 năm 1960 tại Hà Nội.'
    },
    {
      question: 'Đại hội III xác định nhiệm vụ chiến lược của cách mạng miền Bắc là gì?',
      options: [
        'Giải phóng miền Nam khỏi ách thống trị của Mỹ',
        'Tiến hành cách mạng xã hội chủ nghĩa',
        'Thực hiện cải cách ruộng đất',
        'Xây dựng nền kinh tế thị trường'
      ],
      correctAnswer: 1,
      explanation: 'Đại hội xác định miền Bắc có nhiệm vụ tiến hành cách mạng xã hội chủ nghĩa, trở thành hậu phương lớn.'
    },
    {
      question: 'Vai trò của cách mạng miền Bắc đối với sự nghiệp thống nhất nước nhà theo Đại hội III là:',
      options: ['Quyết định trực tiếp', 'Quyết định nhất', 'Hỗ trợ kỹ thuật', 'Vai trò thứ yếu'],
      correctAnswer: 1,
      explanation: 'Cách mạng XHCN ở miền Bắc giữ vai trò quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam.'
    },
    {
      question: 'Cách mạng dân tộc dân chủ nhân dân ở miền Nam giữ vai trò gì?',
      options: ['Quyết định nhất', 'Quyết định trực tiếp', 'Vai trò hậu phương', 'Vai trò ngoại giao'],
      correctAnswer: 1,
      explanation: 'Cách mạng miền Nam giữ vai trò quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam, đánh đổ ách thống trị của Mỹ - Diệm.'
    },
    {
      question: 'Mục tiêu chung của cách mạng cả nước được Đại hội III xác định là gì?',
      options: [
        'Xây dựng CNXH ở cả hai miền',
        'Hòa bình thống nhất Tổ quốc',
        'Phát triển công nghiệp nặng',
        'Mở rộng quan hệ quốc tế'
      ],
      correctAnswer: 1,
      explanation: 'Mục tiêu chung là hoàn thành cách mạng dân tộc dân chủ nhân dân trong cả nước, thực hiện hòa bình thống nhất Tổ quốc.'
    },
    {
      question: 'Đại hội III được gọi là đại hội gì?',
      options: [
        'Đại hội Đổi mới',
        'Đại hội xây dựng CNXH ở miền Bắc và đấu tranh thống nhất nước nhà',
        'Đại hội của sức mạnh đoàn kết',
        'Đại hội của niềm tin và khát vọng'
      ],
      correctAnswer: 1,
      explanation: 'Đây là tên gọi khẳng định hai nhiệm vụ chiến lược song song của cách mạng Việt Nam thời bấy giờ.'
    },
    {
      question: 'Bối cảnh lịch sử của Đại hội III là gì?',
      options: [
        'Đất nước vừa giành độc lập năm 1945',
        'Đất nước tạm thời bị chia cắt làm hai miền sau năm 1954',
        'Đất nước vừa hoàn toàn thống nhất năm 1975',
        'Đất nước bắt đầu công cuộc Đổi mới'
      ],
      correctAnswer: 1,
      explanation: 'Sau Hiệp định Giơ-ne-vơ 1954, đất nước bị chia cắt, đòi hỏi một đường lối chiến lược mới cho cả hai miền.'
    },
    {
      question: 'Đại hội III đã xác định miền Bắc là gì của cả nước?',
      options: ['Tiền tuyến lớn', 'Hậu phương lớn', 'Đặc khu kinh tế', 'Trung tâm văn hóa'],
      correctAnswer: 1,
      explanation: 'Miền Bắc được xác định là hậu phương lớn, là căn cứ địa vững chắc cho cuộc đấu tranh ở miền Nam.'
    },
    {
      question: 'Đường lối Đại hội III là sự vận dụng sáng tạo lý luận nào vào thực tiễn Việt Nam?',
      options: ['Chủ nghĩa hiện sinh', 'Chủ nghĩa Mác – Lênin', 'Chủ nghĩa thực dụng', 'Chủ nghĩa tự do'],
      correctAnswer: 1,
      explanation: 'Đảng đã vận dụng sáng tạo chủ nghĩa Mác – Lênin để giải quyết vấn đề một quốc gia thực hiện đồng thời hai chiến lược cách mạng.'
    },
    {
      question: 'Ý nghĩa lớn nhất của Đại hội III là gì?',
      options: [
        'Kết thúc chiến tranh ngay lập tức',
        'Soi đường cho nhân dân ta đánh bại các chiến lược chiến tranh của Mỹ',
        'Xóa bỏ hoàn toàn chế độ phong kiến',
        'Gia nhập Liên Hợp Quốc'
      ],
      correctAnswer: 1,
      explanation: 'Đường lối Đại hội III đã tạo tiền đề lý luận và thực tiễn để nhân dân ta đi đến đại thắng mùa Xuân 1975.'
    }
  ],
  '2': [
    {
      question: 'Đại hội IV của Đảng diễn ra vào thời gian nào?',
      options: ['Tháng 9/1960', 'Tháng 12/1976', 'Tháng 3/1982', 'Tháng 12/1986'],
      correctAnswer: 1,
      explanation: 'Đại hội IV diễn ra vào tháng 12 năm 1976 sau khi đất nước hoàn toàn thống nhất.'
    },
    {
      question: 'Tại Đại hội IV, Đảng Lao động Việt Nam đã đổi tên thành gì?',
      options: [
        'Đảng Dân chủ Việt Nam',
        'Đảng Cộng sản Việt Nam',
        'Đảng Công nhân Việt Nam',
        'Đảng Nhân dân Cách mạng'
      ],
      correctAnswer: 1,
      explanation: 'Việc đổi tên thành Đảng Cộng sản Việt Nam khẳng định bản chất giai cấp công nhân và mục tiêu cuối cùng của Đảng.'
    },
    {
      question: 'Nhiệm vụ trung tâm của cả thời kỳ quá độ được Đại hội IV xác định là gì?',
      options: [
        'Cải cách ruộng đất',
        'Công nghiệp hóa xã hội chủ nghĩa',
        'Phát triển kinh tế tư nhân',
        'Mở cửa nền kinh tế'
      ],
      correctAnswer: 1,
      explanation: 'Đẩy mạnh công nghiệp hóa XHCN được coi là nhiệm vụ trung tâm để xây dựng cơ sở vật chất cho chủ nghĩa xã hội.'
    },
    {
      question: 'Đại hội IV xác định đặc điểm lớn nhất của cách mạng Việt Nam lúc bấy giờ là gì?',
      options: [
        'Đất nước còn chiến tranh',
        'Đất nước đang trong quá trình thống nhất',
        'Đất nước vừa hòa bình, thống nhất, đi lên CNXH từ một nền sản xuất nhỏ',
        'Đất nước đã hoàn thành công nghiệp hóa'
      ],
      correctAnswer: 2,
      explanation: 'Đây là đặc điểm bao trùm, quy định các bước đi và hình thức của thời kỳ quá độ tại Việt Nam.'
    },
    {
      question: 'Chế độ nào được Đại hội IV nhấn mạnh xây dựng?',
      options: [
        'Chế độ quân chủ',
        'Chế độ làm chủ tập thể xã hội chủ nghĩa',
        'Chế độ đa nguyên',
        'Chế độ tự do kinh doanh'
      ],
      correctAnswer: 1,
      explanation: 'Xây dựng chế độ làm chủ tập thể XHCN là mục tiêu quan trọng để phát huy quyền làm chủ của nhân dân lao động.'
    },
    {
      question: 'Đại hội IV đã tổng kết cuộc kháng chiến nào?',
      options: [
        'Kháng chiến chống Pháp',
        'Kháng chiến chống Mỹ cứu nước',
        'Chiến tranh biên giới phía Bắc',
        'Cách mạng tháng Tám'
      ],
      correctAnswer: 1,
      explanation: 'Đại hội đã tổng kết thắng lợi vĩ đại của cuộc kháng chiến chống Mỹ, giải phóng hoàn toàn miền Nam.'
    },
    {
      question: 'Một trong những hạn chế của tư duy kinh tế giai đoạn Đại hội IV là gì?',
      options: [
        'Quá coi trọng kinh tế thị trường',
        'Chủ quan, duy ý chí, nóng vội',
        'Không quan tâm đến công nghiệp',
        'Quá phụ thuộc vào đầu tư nước ngoài'
      ],
      correctAnswer: 1,
      explanation: 'Sự nóng vội trong việc xóa bỏ các thành phần kinh tế phi XHCN đã gây ra những khó khăn cho nền kinh tế sau này.'
    },
    {
      question: 'Đại hội IV đề ra mục tiêu xây dựng "con người mới" là con người như thế nào?',
      options: [
        'Con người tự do cá nhân',
        'Con người mới xã hội chủ nghĩa',
        'Con người thuần túy kỹ thuật',
        'Con người của thời đại phong kiến'
      ],
      correctAnswer: 1,
      explanation: 'Xây dựng con người mới XHCN có đạo đức cách mạng và năng lực làm chủ là một nhiệm vụ then chốt.'
    },
    {
      question: 'Ý nghĩa lịch sử của Đại hội IV là gì?',
      options: [
        'Mở ra kỷ nguyên độc lập, thống nhất và cả nước đi lên CNXH',
        'Bắt đầu thời kỳ chiến tranh lạnh',
        'Xác lập chế độ tư bản tại Việt Nam',
        'Kết thúc thời kỳ quá độ'
      ],
      correctAnswer: 0,
      explanation: 'Đại hội đánh dấu bước ngoặt đưa cả dân tộc bước vào thời kỳ phát triển mới sau hơn 20 năm chia cắt.'
    },
    {
      question: 'Đại hội IV xác định nền tảng tư tưởng của Đảng là gì?',
      options: [
        'Chủ nghĩa tam dân',
        'Chủ nghĩa Mác – Lênin',
        'Chủ nghĩa thực dụng',
        'Chủ nghĩa dân tộc cực đoan'
      ],
      correctAnswer: 1,
      explanation: 'Đảng tiếp tục khẳng định chủ nghĩa Mác – Lênin là kim chỉ nam cho mọi hành động của cách mạng Việt Nam.'
    }
  ],
  '3': [
    {
      question: 'Đại hội V của Đảng diễn ra trong bối cảnh kinh tế như thế nào?',
      options: [
        'Kinh tế phát triển vượt bậc',
        'Đất nước rơi vào khủng hoảng kinh tế - xã hội',
        'Lạm phát ở mức 0%',
        'Đã hoàn thành công nghiệp hóa'
      ],
      correctAnswer: 1,
      explanation: 'Đầu thập niên 80, Việt Nam đối mặt với khủng hoảng trầm trọng, lạm phát cao và đời sống nhân dân khó khăn.'
    },
    {
      question: 'Đại hội V (1982) xác định mặt trận hàng đầu là gì?',
      options: ['Công nghiệp nặng', 'Nông nghiệp', 'Giao thông vận tải', 'Giáo dục'],
      correctAnswer: 1,
      explanation: 'Đảng xác định phải lấy nông nghiệp làm mặt trận hàng đầu để giải quyết vấn đề lương thực và nguyên liệu.'
    },
    {
      question: 'Hai nhiệm vụ chiến lược được Đại hội V xác định là gì?',
      options: [
        'Xây dựng CNXH và bảo vệ Tổ quốc',
        'Phát triển kinh tế và mở rộng lãnh thổ',
        'Cải cách giáo dục và y tế',
        'Chống tham nhũng và lãng phí'
      ],
      correctAnswer: 0,
      explanation: 'Xây dựng thành công CNXH và sẵn sàng chiến đấu bảo vệ Tổ quốc là hai nhiệm vụ không thể tách rời.'
    },
    {
      question: 'Đại hội V đánh dấu sự chuyển biến nào trong tư duy của Đảng?',
      options: [
        'Từ tư duy thực tiễn sang giáo điều',
        'Từ tư duy giáo điều sang tư duy thực tiễn, tôn trọng quy luật khách quan',
        'Từ bỏ mục tiêu xã hội chủ nghĩa',
        'Quay lại chế độ phong kiến'
      ],
      correctAnswer: 1,
      explanation: 'Đảng bắt đầu nhìn thẳng vào sự thật, thừa nhận những sai lầm chủ quan để điều chỉnh đường lối.'
    },
    {
      question: 'Đại hội V xác định chặng đường nào của thời kỳ quá độ?',
      options: ['Chặng đường cuối cùng', 'Chặng đường đầu tiên', 'Giai đoạn bứt phá', 'Giai đoạn kết thúc'],
      correctAnswer: 1,
      explanation: 'Đại hội xác định những nhiệm vụ cụ thể cho chặng đường đầu tiên của thời kỳ quá độ lên CNXH.'
    },
    {
      question: 'Cơ cấu kinh tế được Đại hội V đề ra là kết hợp giữa các yếu tố nào?',
      options: [
        'Nông nghiệp và dịch vụ',
        'Nông nghiệp, công nghiệp hàng tiêu dùng và công nghiệp nặng',
        'Chỉ tập trung công nghiệp nặng',
        'Kinh tế tư nhân và đầu tư nước ngoài'
      ],
      correctAnswer: 1,
      explanation: 'Sự kết hợp này nhằm tạo ra một cơ cấu kinh tế hợp lý, phù hợp với trình độ lực lượng sản xuất lúc bấy giờ.'
    },
    {
      question: 'Dưới góc độ triết học, bài học lớn nhất từ Đại hội V là gì?',
      options: [
        'Phải đốt cháy giai đoạn',
        'Tôn trọng quy luật khách quan, lấy thực tiễn làm thước đo chân lý',
        'Chỉ cần ý chí là làm được tất cả',
        'Không cần quan tâm đến quy luật kinh tế'
      ],
      correctAnswer: 1,
      explanation: 'Việc điều chỉnh đường lối cho thấy Đảng đã nhận thức sâu sắc về việc phải tuân thủ các quy luật khách quan.'
    },
    {
      question: 'Đại hội V nhấn mạnh việc tranh thủ sức mạnh nào?',
      options: [
        'Sức mạnh của các tập đoàn đa quốc gia',
        'Sức mạnh thời đại và sự ủng hộ của các nước XHCN',
        'Sức mạnh của thị trường tự do',
        'Sức mạnh của các tổ chức tôn giáo'
      ],
      correctAnswer: 1,
      explanation: 'Trong bối cảnh bị bao vây cấm vận, việc tranh thủ sự ủng hộ quốc tế là vô cùng quan trọng.'
    },
    {
      question: 'Đại hội V đã chuẩn bị tiền đề cho sự kiện trọng đại nào sau đó?',
      options: [
        'Chiến dịch Điện Biên Phủ',
        'Công cuộc Đổi mới năm 1986',
        'Gia nhập ASEAN',
        'Ký kết Hiệp định Paris'
      ],
      correctAnswer: 1,
      explanation: 'Những tìm tòi và điều chỉnh tại Đại hội V là bước đệm quan trọng cho sự ra đời của đường lối Đổi mới.'
    },
    {
      question: 'Đại hội V xác định kẻ thù trực tiếp và nguy hiểm nhất lúc bấy giờ là ai?',
      options: [
        'Chủ nghĩa thực dân cũ',
        'Chủ nghĩa bành trướng và bá quyền quốc tế',
        'Các thế lực phong kiến',
        'Các tập đoàn tư bản'
      ],
      correctAnswer: 1,
      explanation: 'Đây là sự xác định dựa trên tình hình thực tế biên giới và quan hệ quốc tế phức tạp giai đoạn đó.'
    }
  ],
  '4': [
    {
      question: 'Theo lý luận Mác – Lênin, mâu thuẫn cơ bản trong thời đại đế quốc chủ nghĩa là gì?',
      options: [
        'Mâu thuẫn giữa các tôn giáo',
        'Mâu thuẫn giữa các dân tộc bị áp bức và chủ nghĩa đế quốc',
        'Mâu thuẫn giữa các thế hệ',
        'Mâu thuẫn giữa nông thôn và thành thị'
      ],
      correctAnswer: 1,
      explanation: 'Lênin chỉ rõ đây là mâu thuẫn then chốt thúc đẩy phong trào giải phóng dân tộc phát triển.'
    },
    {
      question: 'Nội dung cốt lõi của quyền dân tộc tự quyết là gì?',
      options: [
        'Quyền được đi xâm lược nước khác',
        'Quyền tự do phân lập thành quốc gia độc lập',
        'Quyền phụ thuộc vào các cường quốc',
        'Quyền duy trì chế độ nô lệ'
      ],
      correctAnswer: 1,
      explanation: 'Quyền tự quyết bao gồm việc các dân tộc hoàn toàn tự do quyết định vận mệnh chính trị của mình.'
    },
    {
      question: 'Lý luận Mác – Lênin khẳng định giải phóng dân tộc phải gắn liền với giải phóng gì?',
      options: [
        'Giải phóng giai cấp và giải phóng con người',
        'Giải phóng các thị trường tài chính',
        'Giải phóng các nguồn tài nguyên',
        'Giải phóng các tư tưởng tôn giáo'
      ],
      correctAnswer: 0,
      explanation: 'Chỉ có giải phóng triệt để con người khỏi mọi áp bức mới là mục tiêu cuối cùng của cách mạng.'
    },
    {
      question: 'Theo Lênin, phong trào giải phóng dân tộc là một bộ phận của cách mạng nào?',
      options: [
        'Cách mạng tư sản',
        'Cách mạng vô sản thế giới',
        'Cách mạng công nghiệp',
        'Cách mạng văn hóa'
      ],
      correctAnswer: 1,
      explanation: 'Cuộc đấu tranh của các dân tộc thuộc địa góp phần làm suy yếu chủ nghĩa đế quốc, hỗ trợ cách mạng vô sản.'
    },
    {
      question: 'Con đường duy nhất để giải phóng dân tộc triệt để theo quan điểm Mác-xít là gì?',
      options: [
        'Con đường cải lương',
        'Con đường cách mạng vô sản',
        'Con đường thương lượng hòa bình',
        'Con đường dựa vào sự giúp đỡ của thực dân'
      ],
      correctAnswer: 1,
      explanation: 'Chỉ có cách mạng vô sản mới xóa bỏ tận gốc nguồn gốc của áp bức dân tộc là chế độ tư hữu.'
    },
    {
      question: 'Lý luận giải phóng dân tộc của Lênin đã cổ vũ mạnh mẽ đối tượng nào?',
      options: [
        'Các tầng lớp quý tộc',
        'Các dân tộc thuộc địa và phụ thuộc',
        'Các chủ ngân hàng lớn',
        'Các thế lực quân phiệt'
      ],
      correctAnswer: 1,
      explanation: 'Lý luận này đã trở thành vũ khí tư tưởng sắc bén cho nhân dân các nước thuộc địa vùng lên đấu tranh.'
    },
    {
      question: 'Dưới góc độ triết học, giải phóng dân tộc là việc giải quyết mâu thuẫn giữa:',
      options: [
        'Lực lượng sản xuất và quan hệ sản xuất thực dân lỗi thời',
        'Con người và thiên nhiên',
        'Các dòng họ trong xã hội',
        'Các lý thuyết khoa học'
      ],
      correctAnswer: 0,
      explanation: 'Ách thống trị thực dân kìm hãm sự phát triển của lực lượng sản xuất tại các nước thuộc địa.'
    },
    {
      question: 'Lênin cho rằng cách mạng ở thuộc địa có thể như thế nào so với chính quốc?',
      options: [
        'Luôn phải nổ ra sau',
        'Có thể nổ ra và giành thắng lợi trước',
        'Không bao giờ thắng lợi được',
        'Phải phụ thuộc hoàn toàn vào chính quốc'
      ],
      correctAnswer: 1,
      explanation: 'Đây là luận điểm sáng tạo, khẳng định tính chủ động của cách mạng ở các nước thuộc địa.'
    },
    {
      question: 'Ý nghĩa của liên minh giữa giai cấp công nhân chính quốc và nhân dân thuộc địa là gì?',
      options: [
        'Tạo ra sức mạnh tổng hợp đánh đổ chủ nghĩa đế quốc',
        'Để chia sẻ tài nguyên',
        'Để mở rộng thị trường',
        'Để đồng hóa văn hóa'
      ],
      correctAnswer: 0,
      explanation: 'Sự đoàn kết này tạo thành hai gọng kìm siết chặt và tiêu diệt kẻ thù chung là chủ nghĩa đế quốc.'
    },
    {
      question: 'Đối với Việt Nam, lý luận giải phóng dân tộc Mác – Lênin có vai trò gì?',
      options: [
        'Chỉ là tài liệu tham khảo',
        'Giúp Nguyễn Ái Quốc tìm thấy con đường cứu nước đúng đắn',
        'Làm cản trở quá trình giành độc lập',
        'Không có ảnh hưởng gì'
      ],
      correctAnswer: 1,
      explanation: 'Nguyễn Ái Quốc đã khẳng định: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".'
    }
  ],
  '5': [
    {
      question: 'Câu nói nổi tiếng nào của Hồ Chí Minh khẳng định tính thống nhất của dân tộc?',
      options: [
        'Không có gì quý hơn độc lập tự do',
        'Nước Việt Nam là một, dân tộc Việt Nam là một',
        'Vì lợi ích mười năm trồng cây',
        'Đoàn kết, đoàn kết, đại đoàn kết'
      ],
      correctAnswer: 1,
      explanation: 'Đây là chân lý khẳng định chủ quyền và toàn vẹn lãnh thổ không thể chia cắt của Việt Nam.'
    },
    {
      question: 'Mối quan hệ giữa giải phóng dân tộc và thống nhất đất nước là mối quan hệ gì?',
      options: ['Tách rời nhau', 'Biện chứng, gắn kết hữu cơ', 'Mâu thuẫn nhau', 'Thứ yếu'],
      correctAnswer: 1,
      explanation: 'Hai mục tiêu này hỗ trợ và làm tiền đề cho nhau trong tư duy chiến lược của Hồ Chí Minh.'
    },
    {
      question: 'Theo Hồ Chí Minh, độc lập mà không thống nhất thì như thế nào?',
      options: ['Là độc lập hoàn toàn', 'Độc lập đó chưa hoàn toàn', 'Rất tốt cho phát triển', 'Không quan trọng'],
      correctAnswer: 1,
      explanation: 'Người cho rằng một dân tộc bị chia cắt thì không thể có độc lập và sức mạnh thực sự.'
    },
    {
      question: 'Yếu tố nào được coi là tiền đề để thực hiện thống nhất đất nước?',
      options: ['Phát triển kinh tế', 'Giải phóng dân tộc', 'Hợp tác quốc tế', 'Cải cách hành chính'],
      correctAnswer: 1,
      explanation: 'Dân tộc phải được giải phóng khỏi ách nô lệ thì mới có cơ sở để thực hiện thống nhất.'
    },
    {
      question: 'Thống nhất đất nước mang lại lợi ích gì cho thành quả giải phóng dân tộc?',
      options: [
        'Làm suy yếu dân tộc',
        'Bảo vệ và phát huy bền vững thành quả cách mạng',
        'Gây ra xung đột vùng miền',
        'Tốn kém tài chính'
      ],
      correctAnswer: 1,
      explanation: 'Sự thống nhất tạo ra sức mạnh tổng hợp để giữ vững nền độc lập và phát triển quốc gia.'
    },
    {
      question: 'Thống nhất trong tư tưởng Hồ Chí Minh không chỉ là địa lý mà còn là gì?',
      options: ['Thống nhất về tôn giáo', 'Sự hòa hợp dân tộc, xóa bỏ chia rẽ', 'Thống nhất về ngôn ngữ', 'Thống nhất về trang phục'],
      correctAnswer: 1,
      explanation: 'Người luôn nhấn mạnh sự đoàn kết tâm hồn và ý chí của mọi người dân Việt Nam.'
    },
    {
      question: 'Hồ Chí Minh kêu gọi đại đoàn kết dựa trên nền tảng nào?',
      options: [
        'Lòng yêu nước và khát vọng thống nhất',
        'Sự giống nhau về giai cấp',
        'Sự giống nhau về đảng phái',
        'Sự giống nhau về giàu nghèo'
      ],
      correctAnswer: 0,
      explanation: 'Bất kỳ ai có lòng yêu nước đều có thể đứng trong hàng ngũ đại đoàn kết dân tộc.'
    },
    {
      question: 'Ý chí "Không có gì quý hơn độc lập tự do" có tác động thế nào đến mục tiêu thống nhất?',
      options: [
        'Làm người dân nản chí',
        'Tạo nên sức mạnh vô song để vượt qua mọi gian khổ',
        'Chỉ có tác dụng trong chiến tranh',
        'Không liên quan đến thống nhất'
      ],
      correctAnswer: 1,
      explanation: 'Khát vọng tự do là động lực lớn nhất để nhân dân ta chiến đấu cho một Tổ quốc vẹn tròn.'
    },
    {
      question: 'Trong cuộc kháng chiến chống Mỹ, nhiệm vụ thiêng liêng nhất là gì?',
      options: [
        'Phát triển du lịch',
        'Giải phóng miền Nam, thống nhất nước nhà',
        'Xây dựng các nhà máy lớn',
        'Mở rộng thị trường xuất khẩu'
      ],
      correctAnswer: 1,
      explanation: 'Đây là nhiệm vụ trọng tâm mà Hồ Chí Minh và Đảng đã xác định cho toàn dân tộc.'
    },
    {
      question: 'Bài học về thống nhất đất nước ngày nay có ý nghĩa gì?',
      options: [
        'Chỉ là chuyện quá khứ',
        'Giúp giữ vững chủ quyền và toàn vẹn lãnh thổ trong bối cảnh mới',
        'Làm cản trở hội nhập',
        'Không còn giá trị'
      ],
      correctAnswer: 1,
      explanation: 'Sự thống nhất về tư tưởng và hành động vẫn là yếu tố sống còn để bảo vệ quốc gia.'
    }
  ],
  '6': [
    {
      question: 'Việt Nam quá độ lên chủ nghĩa xã hội theo hình thức nào?',
      options: ['Quá độ trực tiếp', 'Quá độ gián tiếp, bỏ qua chế độ tư bản chủ nghĩa', 'Quá độ từ chế độ nô lệ', 'Không qua thời kỳ quá độ'],
      correctAnswer: 1,
      explanation: 'Việt Nam đi lên CNXH từ một nước nông nghiệp lạc hậu, không trải qua giai đoạn phát triển tư bản.'
    },
    {
      question: 'Việc "bỏ qua chế độ tư bản chủ nghĩa" được hiểu như thế nào cho đúng?',
      options: [
        'Bỏ qua mọi thành tựu của nhân loại dưới thời tư bản',
        'Bỏ qua vị trí thống trị của quan hệ sản xuất tư bản nhưng kế thừa tinh hoa khoa học, công nghệ',
        'Đóng cửa biên giới với các nước tư bản',
        'Xóa bỏ hoàn toàn máy móc'
      ],
      correctAnswer: 1,
      explanation: 'Chúng ta kế thừa những lực lượng sản xuất hiện đại mà nhân loại đã đạt được để xây dựng xã hội mới.'
    },
    {
      question: 'Mục tiêu tổng quát của con đường quá độ ở Việt Nam là gì?',
      options: [
        'Trở thành cường quốc quân sự',
        'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
        'Xây dựng nền kinh tế tự cung tự cấp',
        'Duy trì mô hình kinh tế cũ'
      ],
      correctAnswer: 1,
      explanation: 'Đây là mục tiêu xuyên suốt, thể hiện bản chất nhân văn của chế độ xã hội chủ nghĩa.'
    },
    {
      question: 'Thời kỳ quá độ lên CNXH ở Việt Nam được dự báo là như thế nào?',
      options: ['Rất ngắn', 'Lâu dài, gian khổ và phức tạp', 'Dễ dàng thực hiện', 'Đã kết thúc'],
      correctAnswer: 1,
      explanation: 'Do xuất phát điểm thấp, việc xây dựng các tiền đề cho CNXH đòi hỏi thời gian và nỗ lực rất lớn.'
    },
    {
      question: 'Mô hình kinh tế trong thời kỳ quá độ ở Việt Nam là gì?',
      options: [
        'Kinh tế kế hoạch hóa tập trung bao cấp',
        'Kinh tế thị trường định hướng xã hội chủ nghĩa',
        'Kinh tế thị trường tự do hoàn toàn',
        'Kinh tế nông nghiệp thuần túy'
      ],
      correctAnswer: 1,
      explanation: 'Đây là mô hình sáng tạo, kết hợp sức mạnh thị trường với mục tiêu xã hội chủ nghĩa.'
    },
    {
      question: 'Dưới góc độ triết học, quá độ lên CNXH là sự phủ định gì?',
      options: ['Phủ định sạch trơn', 'Phủ định biện chứng đối với chế độ cũ', 'Phủ định các giá trị truyền thống', 'Phủ định vai trò con người'],
      correctAnswer: 1,
      explanation: 'Chúng ta xóa bỏ những cái lạc hậu nhưng giữ lại và phát triển những cái tiến bộ.'
    },
    {
      question: 'Yếu tố nào giữ vai trò lãnh đạo trong thời kỳ quá độ?',
      options: ['Các tập đoàn kinh tế', 'Đảng Cộng sản Việt Nam', 'Các tổ chức quốc tế', 'Các cá nhân giàu có'],
      correctAnswer: 1,
      explanation: 'Sự lãnh đạo của Đảng là nhân tố quyết định thắng lợi của công cuộc xây dựng CNXH.'
    },
    {
      question: 'Nhiệm vụ then chốt để rút ngắn thời kỳ quá độ hiện nay là gì?',
      options: [
        'Đẩy mạnh công nghiệp hóa, hiện đại hóa',
        'Tăng cường nhập khẩu hàng tiêu dùng',
        'Hạn chế phát triển công nghệ',
        'Quay lại sản xuất thủ công'
      ],
      correctAnswer: 0,
      explanation: 'Chỉ có xây dựng được lực lượng sản xuất hiện đại mới có thể tiến nhanh lên CNXH.'
    },
    {
      question: 'Việc xây dựng Nhà nước pháp quyền XHCN nhằm mục đích gì?',
      options: [
        'Để quản lý xã hội bằng pháp luật, bảo vệ quyền lợi nhân dân',
        'Để hạn chế quyền tự do',
        'Để phục vụ một nhóm nhỏ',
        'Để thay thế vai trò của Đảng'
      ],
      correctAnswer: 0,
      explanation: 'Nhà nước là công cụ để nhân dân thực hiện quyền làm chủ của mình.'
    },
    {
      question: 'Tại sao nói con đường quá độ ở Việt Nam là sự lựa chọn đúng đắn?',
      options: [
        'Vì nó phù hợp với quy luật khách quan và khát vọng của nhân dân',
        'Vì không còn con đường nào khác',
        'Vì bị ép buộc',
        'Vì nó dễ làm'
      ],
      correctAnswer: 0,
      explanation: 'Thực tiễn lịch sử và những thành tựu Đổi mới đã chứng minh tính đúng đắn của sự lựa chọn này.'
    }
  ],
  '7': [
    {
      question: 'Hàng hóa là gì theo kinh tế chính trị Mác – Lênin?',
      options: [
        'Mọi vật phẩm có trong tự nhiên',
        'Sản phẩm của lao động, thỏa mãn nhu cầu con người và để trao đổi',
        'Chỉ những thứ có thể ăn được',
        'Những thứ được tặng cho'
      ],
      correctAnswer: 1,
      explanation: 'Một vật phẩm chỉ trở thành hàng hóa khi nó là sản phẩm lao động và được đưa vào lưu thông mua bán.'
    },
    {
      question: 'Hàng hóa có mấy thuộc tính cơ bản?',
      options: ['Một', 'Hai', 'Ba', 'Bốn'],
      correctAnswer: 1,
      explanation: 'Hàng hóa có hai thuộc tính là giá trị sử dụng và giá trị.'
    },
    {
      question: 'Giá trị sử dụng của hàng hóa là gì?',
      options: [
        'Số tiền để mua hàng hóa',
        'Công dụng của vật phẩm thỏa mãn nhu cầu con người',
        'Lao động kết tinh trong hàng hóa',
        'Sự khan hiếm của hàng hóa'
      ],
      correctAnswer: 1,
      explanation: 'Giá trị sử dụng phản ánh thuộc tính tự nhiên và ích lợi của hàng hóa đối với người dùng.'
    },
    {
      question: 'Bản chất của giá trị hàng hóa là gì?',
      options: [
        'Sự yêu thích của người mua',
        'Lao động xã hội của người sản xuất kết tinh trong hàng hóa',
        'Giá cả niêm yết trên thị trường',
        'Chi phí vận chuyển'
      ],
      correctAnswer: 1,
      explanation: 'Giá trị là nội dung bên trong, là cơ sở của giá trị trao đổi.'
    },
    {
      question: 'Mối quan hệ giữa giá trị sử dụng và giá trị là gì?',
      options: [
        'Hoàn toàn tách rời',
        'Thống nhất và mâu thuẫn biện chứng',
        'Luôn luôn giống nhau',
        'Không có mối quan hệ'
      ],
      correctAnswer: 1,
      explanation: 'Chúng cùng tồn tại trong một hàng hóa nhưng lại có những mục đích và tính chất khác nhau.'
    },
    {
      question: 'Lao động tạo ra giá trị hàng hóa được gọi là gì?',
      options: ['Lao động cụ thể', 'Lao động trừu tượng', 'Lao động chân tay', 'Lao động trí óc'],
      correctAnswer: 1,
      explanation: 'Lao động trừu tượng là sự hao phí sức lao động nói chung, tạo ra giá trị của hàng hóa.'
    },
    {
      question: 'Lượng giá trị của hàng hóa được đo bằng yếu tố nào?',
      options: [
        'Thời gian lao động cá biệt',
        'Thời gian lao động xã hội cần thiết',
        'Trọng lượng của hàng hóa',
        'Kích thước của hàng hóa'
      ],
      correctAnswer: 1,
      explanation: 'Giá trị hàng hóa không dựa trên nỗ lực cá nhân mà dựa trên mức trung bình của xã hội.'
    },
    {
      question: 'Tại sao các hàng hóa khác nhau lại trao đổi được với nhau?',
      options: [
        'Vì chúng có cùng công dụng',
        'Vì chúng đều là kết quả của lao động trừu tượng',
        'Vì người mua thích cả hai',
        'Vì chúng có cùng màu sắc'
      ],
      correctAnswer: 1,
      explanation: 'Sự đồng nhất về lao động kết tinh cho phép các hàng hóa khác nhau có thể so sánh và trao đổi.'
    },
    {
      question: 'Khi năng suất lao động tăng lên thì lượng giá trị của một đơn vị hàng hóa sẽ:',
      options: ['Tăng lên', 'Giảm xuống', 'Không đổi', 'Biến mất'],
      correctAnswer: 1,
      explanation: 'Năng suất tăng làm giảm thời gian lao động cần thiết để tạo ra một sản phẩm, do đó giá trị giảm.'
    },
    {
      question: 'Ý nghĩa thực tiễn của việc nghiên cứu hai thuộc tính hàng hóa là gì?',
      options: [
        'Giúp doanh nghiệp cải tiến kỹ thuật, giảm chi phí và nâng cao chất lượng',
        'Để tăng giá bán vô tội vạ',
        'Để hạn chế sản xuất',
        'Để không cần quan tâm đến khách hàng'
      ],
      correctAnswer: 0,
      explanation: 'Hiểu rõ giá trị và giá trị sử dụng giúp doanh nghiệp tối ưu hóa sản xuất và đáp ứng nhu cầu thị trường.'
    }
  ],
  '8': [
    {
      question: 'Thị trường là gì?',
      options: [
        'Một địa điểm cụ thể để bán rau',
        'Tổng hòa các mối quan hệ kinh tế thông qua trao đổi, giá cả và cạnh tranh',
        'Chỉ là nơi trưng bày hàng hóa',
        'Một tổ chức từ thiện'
      ],
      correctAnswer: 1,
      explanation: 'Thị trường bao gồm mọi quan hệ mua bán, không nhất thiết phải có địa điểm cố định.'
    },
    {
      question: 'Chức năng "bàn tay vô hình" của thị trường giúp ích gì?',
      options: [
        'Gây ra lãng phí',
        'Phân bổ các nguồn lực xã hội một cách hiệu quả',
        'Làm tăng giá cả',
        'Hạn chế sự sáng tạo'
      ],
      correctAnswer: 1,
      explanation: 'Thông qua cơ chế giá cả, thị trường tự điều chỉnh để nguồn lực chảy vào nơi cần thiết nhất.'
    },
    {
      question: 'Nền kinh tế thị trường là giai đoạn phát triển cao của loại hình kinh tế nào?',
      options: ['Kinh tế tự cung tự cấp', 'Kinh tế hàng hóa', 'Kinh tế phong kiến', 'Kinh tế bao cấp'],
      correctAnswer: 1,
      explanation: 'Khi mọi yếu tố đầu vào và đầu ra đều trở thành hàng hóa, kinh tế hàng hóa trở thành kinh tế thị trường.'
    },
    {
      question: 'Đặc trưng của kinh tế thị trường định hướng XHCN ở Việt Nam là gì?',
      options: [
        'Thị trường tự do hoàn toàn không có quản lý',
        'Vận hành theo quy luật thị trường có sự điều tiết của Nhà nước XHCN',
        'Nhà nước quyết định mọi mức giá',
        'Không cho phép tư nhân tham gia'
      ],
      correctAnswer: 1,
      explanation: 'Đây là sự kết hợp giữa tính hiệu quả của thị trường và mục tiêu công bằng của CNXH.'
    },
    {
      question: 'Chức năng thông tin của thị trường cung cấp dữ liệu về yếu tố nào?',
      options: ['Thời tiết', 'Giá cả, cung cầu, chất lượng hàng hóa', 'Các sự kiện thể thao', 'Lịch sử dân tộc'],
      correctAnswer: 1,
      explanation: 'Thông tin thị trường giúp người sản xuất và người tiêu dùng đưa ra quyết định đúng đắn.'
    },
    {
      question: 'Một trong những khuyết tật của thị trường mà Nhà nước cần can thiệp là gì?',
      options: [
        'Sự phong phú của hàng hóa',
        'Khủng hoảng, ô nhiễm môi trường, phân hóa giàu nghèo',
        'Sự cạnh tranh lành mạnh',
        'Giá cả giảm xuống'
      ],
      correctAnswer: 1,
      explanation: 'Thị trường không tự giải quyết được các vấn đề xã hội và môi trường, cần sự điều tiết của Nhà nước.'
    },
    {
      question: 'Nhà nước sử dụng công cụ nào để điều tiết nền kinh tế thị trường?',
      options: [
        'Chỉ dùng mệnh lệnh hành chính',
        'Thuế, lãi suất, đầu tư công và luật pháp',
        'Sức mạnh quân sự',
        'Không sử dụng công cụ nào'
      ],
      correctAnswer: 1,
      explanation: 'Các công cụ kinh tế giúp định hướng thị trường phát triển theo mục tiêu chung.'
    },
    {
      question: 'Thành phần kinh tế nào giữ vai trò chủ đạo trong nền kinh tế Việt Nam?',
      options: ['Kinh tế tư nhân', 'Kinh tế nhà nước', 'Kinh tế có vốn đầu tư nước ngoài', 'Kinh tế tập thể'],
      correctAnswer: 1,
      explanation: 'Kinh tế nhà nước là công cụ để Nhà nước điều tiết và định hướng nền kinh tế.'
    },
    {
      question: 'Cạnh tranh trong kinh tế thị trường có tác dụng gì?',
      options: [
        'Kìm hãm sản xuất',
        'Thúc đẩy cải tiến kỹ thuật và nâng cao hiệu quả',
        'Làm cho hàng hóa xấu đi',
        'Triệt tiêu mọi doanh nghiệp'
      ],
      correctAnswer: 1,
      explanation: 'Cạnh tranh buộc các chủ thể phải luôn đổi mới để tồn tại và phát triển.'
    },
    {
      question: 'Mục tiêu cuối cùng của kinh tế thị trường định hướng XHCN là gì?',
      options: [
        'Lợi nhuận tối đa cho một nhóm người',
        'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
        'Xóa bỏ hoàn toàn thị trường',
        'Trở thành nước xuất khẩu lớn nhất'
      ],
      correctAnswer: 1,
      explanation: 'Kinh tế chỉ là phương tiện để đạt được các mục tiêu xã hội tốt đẹp.'
    }
  ],
  '9': [
    {
      question: 'Bản chất của tiền tệ là gì theo Các Mác?',
      options: [
        'Chỉ là những tờ giấy in hình',
        'Hàng hóa đặc biệt đóng vai trò vật ngang giá chung',
        'Một loại kim loại quý',
        'Sự quy ước tạm thời'
      ],
      correctAnswer: 1,
      explanation: 'Tiền tệ là hàng hóa tách ra để làm thước đo giá trị cho mọi hàng hóa khác.'
    },
    {
      question: 'Chức năng "Thước đo giá trị" của tiền tệ dùng để làm gì?',
      options: [
        'Để mua hàng',
        'Để đo lường và biểu hiện giá trị của các hàng hóa khác',
        'Để cất vào két sắt',
        'Để trả nợ'
      ],
      correctAnswer: 1,
      explanation: 'Tiền tệ giúp chúng ta biết được giá trị của một món đồ thông qua giá cả.'
    },
    {
      question: 'Khi tiền tệ làm môi giới trong quá trình trao đổi hàng hóa, nó thực hiện chức năng gì?',
      options: ['Thước đo giá trị', 'Phương tiện lưu thông', 'Phương tiện cất trữ', 'Tiền tệ thế giới'],
      correctAnswer: 1,
      explanation: 'Lưu thông hàng hóa diễn ra theo công thức H - T - H (Hàng - Tiền - Hàng).'
    },
    {
      question: 'Tiền tệ thực hiện chức năng "Phương tiện thanh toán" khi nào?',
      options: [
        'Khi mua hàng trả tiền ngay',
        'Khi trả nợ, nộp thuế, trả tiền mua chịu',
        'Khi đổi tiền lẻ',
        'Khi đi du lịch nước ngoài'
      ],
      correctAnswer: 1,
      explanation: 'Chức năng này xuất hiện khi việc mua bán và thanh toán tách rời nhau về thời gian.'
    },
    {
      question: 'Tại sao tiền tệ được gọi là "huyết mạch" của nền kinh tế?',
      options: [
        'Vì nó có màu đỏ',
        'Vì nó luân chuyển khắp nơi, nuôi dưỡng các hoạt động kinh tế',
        'Vì nó rất hiếm',
        'Vì nó khó kiếm'
      ],
      correctAnswer: 1,
      explanation: 'Tiền tệ thúc đẩy sản xuất, lưu thông và là công cụ để Nhà nước điều tiết vĩ mô.'
    },
    {
      question: 'Lạm phát xảy ra khi nào liên quan đến tiền tệ?',
      options: [
        'Khi lượng tiền trong lưu thông ít hơn nhu cầu',
        'Khi lượng tiền giấy trong lưu thông vượt quá nhu cầu thực tế',
        'Khi không có tiền trong lưu thông',
        'Khi giá vàng giảm'
      ],
      correctAnswer: 1,
      explanation: 'Tiền giấy thừa làm cho giá trị đồng tiền giảm, dẫn đến giá cả hàng hóa tăng vọt.'
    },
    {
      question: 'Chính sách tiền tệ của Nhà nước nhằm mục đích gì?',
      options: [
        'Để in thật nhiều tiền',
        'Kiểm soát lạm phát, ổn định giá trị đồng tiền và kích thích tăng trưởng',
        'Để thu phí người dân',
        'Để cấm sử dụng tiền mặt'
      ],
      correctAnswer: 1,
      explanation: 'Quản lý tiền tệ là công cụ quan trọng để ổn định kinh tế vĩ mô.'
    },
    {
      question: 'Xu hướng phát triển của tiền tệ trong kỷ nguyên số là gì?',
      options: [
        'Quay lại dùng vỏ sò',
        'Tiền điện tử, tiền kỹ thuật số và thanh toán không dùng tiền mặt',
        'Chỉ dùng vàng miếng',
        'Không dùng tiền nữa'
      ],
      correctAnswer: 1,
      explanation: 'Công nghệ giúp việc giao dịch trở nên nhanh chóng, minh bạch và an toàn hơn.'
    },
    {
      question: 'Tiền tệ thế giới được sử dụng trong trường hợp nào?',
      options: [
        'Mua bán trong chợ làng',
        'Giao dịch thương mại và thanh toán quốc tế',
        'Trả lương cho nhân viên trong nước',
        'Tặng quà sinh nhật'
      ],
      correctAnswer: 1,
      explanation: 'Tiền tệ thế giới giúp các quốc gia trao đổi hàng hóa và thanh toán nợ lẫn nhau.'
    },
    {
      question: 'Việc giữ vững giá trị đồng tiền quốc gia có ý nghĩa gì?',
      options: [
        'Chỉ để cho đẹp',
        'Bảo vệ sức mua của người dân và niềm tin của nhà đầu tư',
        'Làm cho hàng hóa đắt lên',
        'Không có ý nghĩa gì'
      ],
      correctAnswer: 1,
      explanation: 'Đồng tiền ổn định là nền tảng cho sự phát triển kinh tế bền vững và chủ quyền quốc gia.'
    }
  ]
};


export const roadmaps: Record<string, RoadmapStep[]> = {
  '1': [
    { title: 'Bối cảnh lịch sử', description: 'Tình hình đất nước sau năm 1954 và yêu cầu của cách mạng.' },
    { title: 'Nhiệm vụ chiến lược', description: 'Xác định hai nhiệm vụ song song ở hai miền Nam - Bắc.' },
    { title: 'Vai trò của miền Bắc', description: 'Miền Bắc là hậu phương lớn, quyết định nhất.' },
    { title: 'Vai trò của miền Nam', description: 'Miền Nam là tiền tuyến lớn, quyết định trực tiếp.' },
    { title: 'Ý nghĩa lịch sử', description: 'Tầm quan trọng của đường lối đối với thắng lợi cuối cùng.' }
  ],
  '2': [
    { title: 'Đất nước thống nhất', description: 'Bối cảnh sau đại thắng mùa Xuân 1975.' },
    { title: 'Đường lối chung', description: 'Xác định con đường đi lên CNXH trên phạm vi cả nước.' },
    { title: 'Công nghiệp hóa', description: 'Nhiệm vụ trung tâm của thời kỳ quá độ.' },
    { title: 'Đổi tên Đảng', description: 'Khẳng định bản chất giai cấp công nhân.' },
    { title: 'Bài học kinh nghiệm', description: 'Những thành tựu và hạn chế bước đầu.' }
  ],
  '3': [
    { title: 'Khủng hoảng kinh tế', description: 'Tình hình đất nước đầu thập niên 80.' },
    { title: 'Điều chỉnh chiến lược', description: 'Thay đổi tư duy về cơ cấu kinh tế.' },
    { title: 'Mặt trận nông nghiệp', description: 'Ưu tiên hàng đầu cho sản xuất lương thực.' },
    { title: 'Hai nhiệm vụ chiến lược', description: 'Xây dựng và bảo vệ Tổ quốc.' },
    { title: 'Tiền đề Đổi mới', description: 'Chuẩn bị cho bước ngoặt năm 1986.' }
  ],
  '4': [
    { title: 'Nguồn gốc lý luận', description: 'Sự phát triển của chủ nghĩa Mác - Lênin về vấn đề dân tộc.' },
    { title: 'Quyền tự quyết', description: 'Nội dung cốt lõi của giải phóng dân tộc.' },
    { title: 'Cách mạng vô sản', description: 'Con đường duy nhất để giải phóng triệt để.' },
    { title: 'Liên minh giai cấp', description: 'Sức mạnh tổng hợp của công nhân và nông dân.' },
    { title: 'Giá trị thời đại', description: 'Tác động đến phong trào giải phóng thế giới.' }
  ],
  '5': [
    { title: 'Chân lý lịch sử', description: 'Khẳng định tính thống nhất của dân tộc Việt Nam.' },
    { title: 'Mối quan hệ biện chứng', description: 'Giải phóng là tiền đề, thống nhất là kết quả.' },
    { title: 'Đại đoàn kết', description: 'Sức mạnh của sự hòa hợp dân tộc.' },
    { title: 'Chủ nghĩa yêu nước', description: 'Động lực to lớn cho sự nghiệp thống nhất.' },
    { title: 'Di sản Hồ Chí Minh', description: 'Giá trị soi đường cho tương lai.' }
  ],
  '6': [
    { title: 'Lựa chọn lịch sử', description: 'Tại sao Việt Nam chọn con đường quá độ lên CNXH.' },
    { title: 'Đặc điểm quá độ', description: 'Bỏ qua chế độ tư bản nhưng kế thừa tinh hoa nhân loại.' },
    { title: 'Nhiệm vụ trọng tâm', description: 'Xây dựng lực lượng sản xuất và quan hệ sản xuất mới.' },
    { title: 'Kinh tế thị trường định hướng XHCN', description: 'Mô hình kinh tế trong thời kỳ quá độ.' },
    { title: 'Mục tiêu cuối cùng', description: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.' }
  ],
  '7': [
    { title: 'Khái niệm hàng hóa', description: 'Định nghĩa và điều kiện để sản phẩm trở thành hàng hóa.' },
    { title: 'Giá trị sử dụng', description: 'Tìm hiểu về công dụng và tính hữu ích của hàng hóa.' },
    { title: 'Giá trị hàng hóa', description: 'Bản chất lao động xã hội kết tinh trong sản phẩm.' },
    { title: 'Mối quan hệ biện chứng', description: 'Sự thống nhất và mâu thuẫn giữa hai thuộc tính.' },
    { title: 'Ý nghĩa thực tiễn', description: 'Ứng dụng trong quản lý sản xuất và kinh doanh.' }
  ],
  '8': [
    { title: 'Bản chất thị trường', description: 'Tổng hòa các mối quan hệ trao đổi và cơ chế giá cả.' },
    { title: 'Chức năng thị trường', description: 'Thừa nhận, thông tin và điều tiết sản xuất.' },
    { title: 'Kinh tế thị trường', description: 'Giai đoạn phát triển cao của kinh tế hàng hóa.' },
    { title: 'Vai trò Nhà nước', description: 'Điều tiết vĩ mô và khắc phục khuyết tật thị trường.' },
    { title: 'Định hướng XHCN', description: 'Sự kết hợp giữa hiệu quả và công bằng.' }
  ],
  '9': [
    { title: 'Nguồn gốc tiền tệ', description: 'Sự ra đời tất yếu từ nhu cầu trao đổi hàng hóa.' },
    { title: 'Bản chất tiền tệ', description: 'Vật ngang giá chung đặc biệt.' },
    { title: 'Các chức năng', description: 'Thước đo giá trị, lưu thông, cất trữ, thanh toán.' },
    { title: 'Huyết mạch kinh tế', description: 'Vai trò thúc đẩy và điều tiết vĩ mô.' },
    { title: 'Tiền tệ hiện đại', description: 'Xu hướng tiền điện tử và quản lý tài chính quốc gia.' }
  ]
};
