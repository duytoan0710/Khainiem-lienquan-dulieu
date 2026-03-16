import { useState } from 'react';
import { Coffee, Layers, RefreshCw, BookOpen, Terminal, CheckSquare, Key } from 'lucide-react';

const lessonSteps = [
  {
    id: 'intro',
    title: '1. Quy trình trên giấy vs. Thực tế',
    icon: <BookOpen className="text-zinc-500" />,
    content: (
      <div className="space-y-6">
        <p className="text-zinc-600">
          Bạn đã vẽ xong <strong>Quy trình (Flow)</strong> trên giấy. Nhưng quy trình đó vẫn chỉ là những bước vẽ tĩnh. 
          Một quy trình không dữ liệu là một quy trình "mù".
        </p>
        <div className="bg-zinc-900 text-zinc-100 p-6 rounded-lg font-mono text-sm">
          <p className="text-emerald-400"># Tư duy BA: Mô hình Input : Process : Output</p>
          <p>Input: <span className="text-zinc-300">Dữ liệu đầu vào (Tên khách, Món)</span></p>
          <p>Process: <span className="text-zinc-300">Quy trình xử lý (Pha chế)</span></p>
          <p>Output: <span className="text-zinc-300">Kết quả (Cà phê đã hoàn thành)</span></p>
          <p className="mt-4 text-amber-300">
            Dữ liệu tạo ra <strong>Ngữ cảnh (Context)</strong> để quy trình biết mình đang làm việc với ai và cái gì.
          </p>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200">
          <h4 className="font-bold text-zinc-900 mb-2 flex items-center gap-2"><CheckSquare size={16}/> Checklist cho BA</h4>
          <ul className="text-sm text-zinc-700 list-disc pl-5 space-y-1">
            <li>Dữ liệu nào là bắt buộc để quy trình bắt đầu?</li>
            <li>Dữ liệu nào được tạo ra trong quá trình xử lý?</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'entity',
    title: '2. Entity là gì?',
    icon: <Layers className="text-zinc-500" />,
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="border-b border-zinc-300 pb-4">
              <h2 className="text-2xl font-bold text-zinc-900">Hành trình từ Dữ liệu thô đến Hệ thống thông minh</h2>
            </div>

            <div className="space-y-6 text-zinc-700 leading-relaxed text-justify">
              <section>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">1. Entity là gì? (Viên gạch nền tảng)</h3>
                <p>
                  Đơn giản là bất cứ <strong>"thứ gì"</strong> (người, vật, sự kiện, khái niệm) mà bạn muốn lưu trữ thông tin về nó. Ví dụ: Trong thư viện, <strong>Cuốn sách</strong> là một Entity vì bạn cần lưu tên, mã số, tác giả.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">2. Tại sao cần Entity? (Câu chuyện về sự hỗn loạn)</h3>
                <p>
                  Nếu không có Entity, dữ liệu chỉ là những con số và chữ viết rời rạc, không có ý nghĩa. 
                  <br/>
                  <em>Ví dụ:</em> Bạn có các dữ liệu: <code>"100"</code>, <code>"Nguyễn Văn A"</code>, <code>"Laptop"</code>. Bạn không biết chúng liên quan gì đến nhau.
                  <br/>
                  Khi có Entity <strong>"Đơn hàng"</strong>, mọi thứ trở nên rõ ràng: <code>Mã đơn: 100</code>, <code>Khách hàng: Nguyễn Văn A</code>, <code>Sản phẩm: Laptop</code>.
                  <br/><br/>
                  Entity giúp chúng ta <strong>"đóng băng"</strong> dữ liệu vào các cấu trúc có nghĩa, giúp hệ thống vận hành trơn tru và tìm kiếm dễ dàng.
                </p>
              </section>

              <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl font-mono text-sm space-y-2 mt-6">
                <p className="text-emerald-400 font-bold"># Tóm lại</p>
                <p>Entity là nền tảng. Phân loại đúng giúp bạn biết cái gì là "Master" để lưu trữ lâu dài, cái gì là "Fact" để đo lường, từ đó thiết kế hệ thống vững chắc.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col gap-4 sticky top-8">
            <div className="bg-zinc-900 text-white p-4 rounded-lg font-bold text-center">
              Cuốn sách (Entity)
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-800 font-medium border-b pb-2">
                <Key className="w-4 h-4 text-amber-500" />
                <span>Mã số</span>
                <span className="text-xs text-zinc-400 ml-auto">(Primary Key)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'attribute',
    title: '3. Attribute là gì?',
    icon: <Layers className="text-zinc-500" />,
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-zinc-700 leading-relaxed text-justify">
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">Attribute là gì? (Đặc điểm của Entity)</h3>
            <p>
              Nếu Entity là "Cái gì", thì <strong>Attribute</strong> chính là "Nó như thế nào". Attribute là các thuộc tính, đặc điểm chi tiết mô tả cho Entity đó.
            </p>
            <p>
              Ví dụ: Với Entity <strong>Cuốn sách</strong>, các Attribute có thể là: <code>Tên sách</code>, <code>Tác giả</code>, <code>Năm xuất bản</code>, <code>Thể loại</code>.
            </p>
            <p>
              <strong>Tư duy BA:</strong> Việc chọn đúng Attribute giúp hệ thống đủ thông tin để vận hành, nhưng không dư thừa gây lãng phí lưu trữ.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col gap-4 sticky top-8">
            <div className="bg-zinc-900 text-white p-4 rounded-lg font-bold text-center">
              Cuốn sách (Entity)
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-800 font-medium border-b pb-2">
                <Key className="w-4 h-4 text-amber-500" />
                <span>Mã số</span>
                <span className="text-xs text-zinc-400 ml-auto">(Primary Key)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <div className="w-4 h-4" />
                <span>Tên sách</span>
                <span className="text-xs text-zinc-400 ml-auto">(Attribute)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <div className="w-4 h-4" />
                <span>Tác giả</span>
                <span className="text-xs text-zinc-400 ml-auto">(Attribute)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <div className="w-4 h-4" />
                <span>Năm xuất bản</span>
                <span className="text-xs text-zinc-400 ml-auto">(Attribute)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl font-mono text-sm space-y-2">
          <p className="text-emerald-400 font-bold"># Chuyển ngữ sang chuyên môn</p>
          <p>Đặc điểm/Thông tin → <strong>Attributes (Thuộc tính)</strong></p>
          <p>Mã định danh duy nhất → <strong>Primary Key (Khóa chính)</strong></p>
        </div>
      </div>
    )
  },
  {
    id: 'relationship',
    title: '4. Relationship là gì?',
    icon: <Layers className="text-zinc-500" />,
    content: (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-zinc-900">Tại sao không nên gộp tất cả dữ liệu vào 1 bảng?</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
             <h4 className="font-bold text-red-900 mb-3">❌ Bảng khổng lồ (Flat Table)</h4>
             <p className="text-xs text-red-800 mb-4">Ví dụ: Nhét cả Sách & Tác giả vào 1 bảng.</p>
             <table className="w-full text-[10px] font-mono border-collapse">
               <thead>
                 <tr className="border-b border-zinc-200">
                   <th className="text-left p-1">Sách</th>
                   <th className="text-left p-1">Tác giả</th>
                   <th className="text-left p-1">Email</th>
                 </tr>
               </thead>
               <tbody>
                 <tr><td className="p-1">Đắc Nhân Tâm</td><td className="p-1">Dale</td><td className="p-1">dale@...</td></tr>
                 <tr><td className="p-1">Quẳng Gánh Lo</td><td className="p-1">Dale</td><td className="p-1">dale@...</td></tr>
               </tbody>
             </table>
             <p className="text-[10px] text-red-700 mt-2">👉 Dale Carnegie bị lặp lại. Nếu đổi email, phải sửa 2 dòng!</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
             <h4 className="font-bold text-emerald-900 mb-3">✅ Chia để trị (Entities)</h4>
             <p className="text-xs text-emerald-800 mb-4">Ví dụ: Tách thành 2 bảng riêng.</p>
             <div className="mb-4">
               <p className="text-[10px] font-bold mb-1">Bảng Sách:</p>
               <table className="w-full text-[10px] font-mono border-collapse mb-2">
                 <thead><tr className="border-b border-zinc-200"><th className="text-left p-1">Tên</th><th className="text-left p-1">Author_ID</th></tr></thead>
                 <tbody><tr><td className="p-1">Đắc Nhân Tâm</td><td className="p-1">01</td></tr></tbody>
               </table>
             </div>
             <div>
               <p className="text-[10px] font-bold mb-1">Bảng Tác giả:</p>
               <table className="w-full text-[10px] font-mono border-collapse">
                 <thead><tr className="border-b border-zinc-200"><th className="text-left p-1">ID</th><th className="text-left p-1">Tên</th><th className="text-left p-1">Email</th></tr></thead>
                 <tbody><tr><td className="p-1">01</td><td className="p-1">Dale</td><td className="p-1">dale@...</td></tr></tbody>
               </table>
             </div>
             <p className="text-[10px] text-emerald-700 mt-2">👉 Dale chỉ xuất hiện 1 lần. Đổi email chỉ cần sửa 1 nơi!</p>
          </div>
        </div>

        <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-emerald-400 mb-4">Vậy khi đã tách bảng, làm sao để chúng "nói chuyện" với nhau?</h3>
          <p className="text-sm text-zinc-300 mb-6">
            Khi chúng ta đã "chia để trị" (tách dữ liệu thành các bảng riêng biệt như Sách và Tác giả), vấn đề mới nảy sinh: <strong>Làm sao để biết cuốn sách này là của tác giả nào?</strong>
          </p>
          <p className="text-sm text-zinc-300 mb-6">
            Đó chính là lúc chúng ta cần đến <strong>Relationship (Mối quan hệ)</strong>. Để kết nối chúng, chúng ta sử dụng <strong>Khóa ngoại (Foreign Key)</strong> – đóng vai trò như một "cái móc" để nối bảng này với bảng kia một cách logic.
          </p>
          
          <div className="flex items-center justify-center gap-4 font-mono text-sm">
            <div className="bg-zinc-700 p-3 rounded">Bảng Sách</div>
            <div className="text-amber-400 text-center">
              <div>-- FK →</div>
              <div className="text-xs text-zinc-500">author_id</div>
            </div>
            <div className="bg-zinc-700 p-3 rounded">Bảng Tác giả</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'erd',
    title: '5. ERD: Bản đồ tổng thể',
    icon: <Layers className="text-zinc-500" />,
    content: (
      <div className="space-y-8">
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <h3 className="text-xl font-bold text-zinc-900">Mọi thứ kết nối lại thành một "Bản vẽ tổng thể"</h3>
          <p>
            Sau khi đã xác định được <strong>Entity</strong> (Ai?), <strong>Attribute</strong> (Đặc điểm gì?) và <strong>Relationship</strong> (Kết nối thế nào?), chúng ta cần một nơi để nhìn thấy toàn bộ bức tranh đó.
          </p>
          <p>
            Đó chính là <strong>ERD (Entity Relationship Diagram)</strong>. Hãy coi nó như bản đồ của một vương quốc, nơi bạn biết rõ từng ngôi nhà nằm ở đâu và con đường nào nối giữa chúng.
          </p>
        </div>

        {/* Visual ERD Storytelling */}
        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            
            {/* Entity 1 */}
            <div className="relative group">
              <div className="bg-white border-2 border-zinc-900 p-4 w-48 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 relative">
                <div className="text-center font-bold border-b-2 border-zinc-900 pb-2 mb-2">SÁCH</div>
                <div className="text-[10px] space-y-1 text-zinc-500 italic">
                  <div>- ID (PK)</div>
                  <div>- Tiêu đề</div>
                  <div>- Giá</div>
                  <div className="text-amber-600 font-bold">- Author_ID (FK)</div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-emerald-100 text-emerald-700 text-[10px] px-2 py-1 rounded border border-emerald-200 font-bold">ENTITY</div>
            </div>

            {/* Relationship Line */}
            <div className="flex flex-col items-center">
              <div className="h-[2px] w-24 bg-zinc-900 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-zinc-900 px-2 py-0.5 text-[10px] font-bold rotate-12 shadow-sm">
                  VIẾT BỞI
                </div>
              </div>
              <div className="text-[10px] font-bold mt-2 text-zinc-400 uppercase tracking-widest">Relationship</div>
            </div>

            {/* Entity 2 */}
            <div className="relative group">
              <div className="bg-white border-2 border-zinc-900 p-4 w-48 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 relative">
                <div className="text-center font-bold border-b-2 border-zinc-900 pb-2 mb-2">TÁC GIẢ</div>
                <div className="text-[10px] space-y-1 text-zinc-500 italic">
                  <div>- ID (PK)</div>
                  <div>- Tên</div>
                  <div>- Email</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-emerald-100 text-emerald-700 text-[10px] px-2 py-1 rounded border border-emerald-200 font-bold">ENTITY</div>
            </div>

          </div>

          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-zinc-600 italic">"Nhìn vào đây, BA và Dev sẽ không bao giờ hiểu lầm nhau."</p>
            <div className="flex justify-center gap-4">
              <span className="flex items-center gap-1 text-[10px] text-zinc-400"><div className="w-2 h-2 bg-zinc-900"></div> Hình chữ nhật: Thực thể</span>
              <span className="flex items-center gap-1 text-[10px] text-zinc-400"><div className="w-4 h-[1px] bg-zinc-900"></div> Đường kẻ: Mối quan hệ</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl font-mono text-sm space-y-2">
          <p className="text-emerald-400 font-bold"># Tại sao ERD lại quan trọng?</p>
          <p>1. <strong>Thống nhất:</strong> BA và Dev nhìn chung một bản vẽ.</p>
          <p>2. <strong>Phát hiện lỗi sớm:</strong> Thấy ngay những chỗ thiếu logic trước khi code.</p>
          <p>3. <strong>Bảo trì:</strong> Sau 1 năm quay lại, nhìn ERD là hiểu hệ thống chạy thế nào.</p>
        </div>
      </div>
    )
  },
  {
    id: 'crud',
    title: '6. CRUD: Vận hành hệ thống',
    icon: <RefreshCw className="text-zinc-500" />,
    content: (
      <div className="space-y-8">
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <h3 className="text-xl font-bold text-zinc-900">Khi "Bản vẽ" bắt đầu đi vào thực tế</h3>
          <p>
            Sau khi đã có <strong>ERD</strong> (Bản vẽ tổng thể), bước tiếp theo là vận hành nó. Dữ liệu không đứng yên, nó có một vòng đời: được sinh ra, được xem, được thay đổi và biến mất.
          </p>
          <p>
            Đó chính là <strong>CRUD</strong>. Nhưng với một BA, CRUD không chỉ là 4 thao tác kỹ thuật, mà là cách chúng ta áp dụng <strong>Quy tắc kinh doanh (Business Rules)</strong> vào từng hành động.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:border-emerald-200 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded text-sm">C</div>
              <div>
                <h4 className="font-bold text-zinc-900">CREATE (Tạo mới)</h4>
                <p className="text-sm text-zinc-600">Khi một cuốn sách mới được nhập kho. Quy tắc: Không được tạo sách nếu chưa có thông tin Tác giả (đảm bảo tính toàn vẹn của Relationship).</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:border-blue-200 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded text-sm">R</div>
              <div>
                <h4 className="font-bold text-zinc-900">READ (Truy xuất)</h4>
                <p className="text-sm text-zinc-600">Khi khách hàng tìm kiếm sách. Quy tắc: Chỉ hiển thị những cuốn sách có trạng thái "Đang bán".</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 text-amber-700 font-bold px-3 py-1 rounded text-sm">U</div>
              <div>
                <h4 className="font-bold text-zinc-900">UPDATE (Cập nhật)</h4>
                <p className="text-sm text-zinc-600">Khi thay đổi giá sách. Quy tắc: Chỉ Admin mới có quyền sửa giá, và phải lưu lại lịch sử thay đổi (Audit Trail).</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:border-red-200 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded text-sm">D</div>
              <div>
                <h4 className="font-bold text-zinc-900">DELETE (Xóa)</h4>
                <p className="text-sm text-zinc-600">Khi hủy một đầu sách. Quy tắc: Không được xóa sách nếu sách đó đang có trong đơn hàng của khách.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl">
          <p className="text-sm italic text-zinc-400">
            "Tư duy BA: Bạn không thiết kế thao tác, bạn thiết kế <strong>Luồng đi của dữ liệu</strong> sao cho an toàn và đúng nghiệp vụ."
          </p>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-100 flex font-sans">
      <aside className="w-72 bg-zinc-950 text-zinc-400 p-8">
        <nav className="space-y-4">
          {lessonSteps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setStep(i)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                step === i ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900'
              }`}
            >
              <div className="font-medium">{s.title}</div>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-16">
        <div className="max-w-6xl">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-zinc-950 tracking-tighter">{lessonSteps[step].title}</h2>
          </div>
          
          <div className="bg-white p-12 rounded-xl border border-zinc-200 shadow-sm min-h-[400px]">
            {lessonSteps[step].content}
          </div>

          <div className="mt-12 flex justify-between items-center">
            <div className="text-zinc-500 font-mono">
              {String(step + 1).padStart(2, '0')} / {String(lessonSteps.length).padStart(2, '0')}
            </div>
            <div className="flex gap-4">
              <button 
                disabled={step === 0}
                onClick={() => setStep(s => s - 1)}
                className="px-8 py-3 rounded-lg bg-zinc-200 hover:bg-zinc-300 disabled:opacity-50 font-bold"
              >
                Quay lại
              </button>
              <button 
                disabled={step === lessonSteps.length - 1}
                onClick={() => setStep(s => s + 1)}
                className="px-8 py-3 rounded-lg bg-zinc-900 text-white hover:bg-black disabled:opacity-50 font-bold"
              >
                Tiếp theo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
