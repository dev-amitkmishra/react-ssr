import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchHits, updatehHits, loadMoreHits, updatehFeedVote } from '../actions';

class HitsList extends Component {
    componentDidMount() {
        this.props.fetchHits();
    }

    renderHits() {
        return this.props.tgaData.map(hit => {
            return <li key={ hit.created_at_i }>{ hit.title }</li>
        });
    };

    nthIndex(str, pat, n){
        var L= str.length, i= -1;
        while(n-- && i++<L){
            i= str.indexOf(pat, i);
            if (i < 0) break;
        }
        return i;
    }
    hideNews(index) {
        this.props.updatehHits(index);
    }

    loadMoreFeeds() {
        this.props.loadMoreHits();
    }

    updateVotes(index) {
        this.props.updatehFeedVote(index);
    }

    renderTable() {
        return this.props.tgaData.map((hit, index) => {
            const { points, num_comments, author, title, url, created_at_i } = hit;
            return (
                <tr key={author + '_' + points} style={{fontSize: '10px', backgroundColor: index % 2 == 0 ? '#e6e6df' : '#f6f6ef'}}>
                    <td style={{padding: '10px'}}>{points}</td>
                    <td style={{paddingRight: '0px'}}>{num_comments}</td>
                    <td style={{cursor: 'pointer'}} onClick={() => this.updateVotes(created_at_i)}><i style={{fontSize: '20px', paddingTop: '10px'}} class="fa fa-sort-asc" aria-hidden="true"></i></td>
                    <td style={{paddingLeft: '10px'}}>
                        <span style={{fontSize: '14px'}}>{title}</span>
                        <span style={{color: '#828282', padding: '0 4px 0 4px'}}>
                            ({url.substring(0, this.nthIndex(url, '/', 3)) || 'http://abc.com'}) by
                        </span>
                        <span style={{color: 'black'}}>
                            {author} 
                        </span>
                        <span style={{color: '#828282', paddingLeft: '4px'}}>
                            {Math.abs(new Date().getHours() - new Date(created_at_i).getHours())} hours ago
                        </span>
                        <span style={{paddingLeft: '4px', color: '#c7c8cb'}}>[ <span style={{color: 'black', cursor: 'pointer'}} onClick={() => this.hideNews(created_at_i)}>hide</span> ]</span>
                    </td>
                </tr>
            )
        })
   }

    render() {
        const bottomColor = this.props.tgaData.length % 2 == 0 ? '#e6e6df' : '#f6f6ef';
        return (
            <div style={{margin: '50px'}}>
                <div style={{backgroundColor: '#ff6600', padding: '6px'}}>
                    <span style={{fontSize: '10px'}}><i class="fa fa-jpy" aria-hidden="true"></i></span>
                    <span style={{fontSize: '14px', color: '#fff', paddingLeft: '30px'}}>top</span>
                    <span style={{borderRight: '1px solid black', height: '30px', paddingLeft: '10px'}}></span>
                    <span style={{fontSize: '14px', paddingLeft: '10px'}}>new</span>
                </div>
                <table id='feeds' style={{display: 'block', border: '1px solid #eee'}}>
                    <tbody style={{display: 'grid'}}>
                        {this.renderTable()}
                    </tbody>
                </table>
                <div style={{backgroundColor: bottomColor, padding: '6px'}}>
                    <span onClick={() => this.loadMoreFeeds()} style={{fontSize: '14px', color: '#ff6600', cursor: 'pointer', paddingLeft: '30px'}}>More</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        tgaData: state.tgaData
    }
}

function loadData(store) {
    return store.dispatch(fetchHits());
};

export { loadData };

export default connect(mapStateToProps, { fetchHits, updatehHits, loadMoreHits, updatehFeedVote })(HitsList);