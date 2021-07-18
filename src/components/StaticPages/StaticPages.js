import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPageBySlug } from '../../redux/Actions/PageAction'


const Pages = () => {
  const { slug_id } = useParams()
  const dispatch = useDispatch()
  const { pageDetails } = useSelector((state) => state.PageReducer)

  useEffect(() => {
    fetchPageContent()
  }, [slug_id])

  const fetchPageContent = () => {
    dispatch(getPageBySlug(slug_id))
  }

  return (
    <div>
      <main className="mainContainer">
        <section className="home-product-section pb-5 mt-4">
          <div className="container">
            <div className="container-fluid row">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageDetails.content
                      ? pageDetails.content
                      : `Coming soon!`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  )

}
// class Pages extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: "",
//     };
//   }

//   async componentDidMount() {
//     this.fetchPageContent(this.props.match.params.pageSlug);
//   }

//   fetchPageContent = async (pageSlug) => {
//     const result = await this.props.getPageContent(pageSlug);
//     console.log("result", result);
//     if (result?.data?.data) {
//       this.setState({
//         content: result.data.data.content,
//         title: result.data.data.title,
//       });
//     }
//   };

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.match.params.pageSlug !== this.props.match.params.pageSlug) {
//       this.fetchPageContent(nextProps.match.params.pageSlug);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <main className="mainContainer">
//           <section className="home-product-section pb-5 mt-4">
//             <div className="container">
//               <div className="container-fluid row">
//                 {/* <h1>
//                   <b>{this.state.title}</b>
//                 </h1> */}

//                 <div>
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: this.state.content
//                         ? this.state.content
//                         : `Coming soon!`,
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     );
//   }
// }



// export default connect(null, mapDispatchToProps)(About_Us);
export default Pages
