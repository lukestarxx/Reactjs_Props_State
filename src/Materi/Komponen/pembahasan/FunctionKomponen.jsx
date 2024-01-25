const FunctionKomponen = ({nama}) => {
    return (
        <div>
            <h1> Halo {nama}</h1>
            <h2>Belajar buat Fungsi Komponen</h2>
        </div>
    )

}

FunctionKomponen.defaultProps = {
    nama : 'Babi'
}

export default FunctionKomponen;


//    ( Contoh Syntax Props )
// const FunctionKomponen = ({nama}) => {
//     return (
//         <div>
//             <h1> Halo {nama}</h1>
//             <h2>Belajar buat Fungsi Komponen</h2>
//         </div>
//     )

// }

// export default FunctionKomponen;